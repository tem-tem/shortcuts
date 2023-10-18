import fs from 'fs';
import path from 'path';

const directoryPath = 'src/data/json';
const outputPath = 'src/data/json-index.json';
const keyMappingsPath = 'src/data/keyMappings.json';

const files = fs.readdirSync(directoryPath);
const jsonFiles = files.filter((file) => file.endsWith('.json'));

// Load key mappings from configuration file
const keyMappings = JSON.parse(fs.readFileSync(keyMappingsPath, 'utf-8'));

// Construct reverse mapping
const reverseMappings = {};
Object.entries(keyMappings).forEach(([standardKey, variations]) => {
	variations.forEach((variation) => {
		reverseMappings[variation.toLowerCase()] = standardKey;
	});
});

function normalize(shortcutKeys) {
	return shortcutKeys.map((keyCombination) =>
		keyCombination.map((key) => reverseMappings[key.toLowerCase()] || key.toLowerCase())
	);
}

const results = [];

jsonFiles.forEach((file) => {
	const fileContent = fs.readFileSync(path.join(directoryPath, file), 'utf-8');
	const jsonContent = JSON.parse(fileContent);

	jsonContent.shortcuts.forEach((item) => {
		const normalizedShortcut = normalize(item.shortcut);
		const metadata = {
			category: jsonContent.category,
			app: jsonContent.app,
			os: jsonContent.os,
			text: item.text
		};

		// Find existing shortcut object in results
		const existingShortcut = results.find(
			(result) => JSON.stringify(result.shortcut) === JSON.stringify(normalizedShortcut)
		);

		if (existingShortcut) {
			existingShortcut.apps.push(metadata);
		} else {
			results.push({
				shortcut: normalizedShortcut,
				apps: [metadata]
			});
		}
	});
});

const exportData = JSON.stringify(results);
fs.writeFileSync(outputPath, exportData, 'utf-8');
