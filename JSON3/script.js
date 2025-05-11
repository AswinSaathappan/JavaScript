const fs = require('fs');

// Step 1: Read JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Step 2: Convert JSON string to an object
    const jsonObject = JSON.parse(data);
    console.log('JSON as Object:', jsonObject);

    // Step 3: Convert object back to a string
    const jsonString = JSON.stringify(jsonObject);
    console.log('JSON as String:', jsonString);
});
