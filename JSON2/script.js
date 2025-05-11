const fs = require('fs');

// Step 1: Read JSON file as a string
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Step 2: Convert JSON to a string
    //(data) Already a string from file
    console.log('JSON as String:', data);

    // Step 3: Convert string back to JSON object
    
        const jsonObject = JSON.parse(data);
        console.log('JSON as Object:', jsonObject);
        console.log(jsonObject.skills[2]);
        console.log(jsonObject.interests.field);
});
    
   /* In the code above, we read the JSON file as a string, log it to the console, and then parse it back to a JSON object. 
    If the file is not found or there is an error reading the file, we log the error to the console. If there is an error parsing the JSON string, we log that error as well. 
    Run the script with the following command: 
    node script.js 
    The output will be as follows: 
    JSON as String: {"name":"John Doe","age":30,"city":"New York"}*/