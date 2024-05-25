const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');

// Function to make API call with a 4-second delay
async function makeAPICall(info) {
    try {
        // Adjust the API endpoint accordingly
        const response = await axios.post('http://localhost:8080/api/compounds/addCompound', info);
        console.log('API response:', response.data);
    } catch (error) {
        console.error('API call failed:', error.message);
    }
}

// Function to read CSV file and process each row
function processCSV(filename) {
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (row) => {
            // Create JSON object from the CSV row
            const info = {
                id: row.id,
                CompoundName: row.CompoundName,
                CompoundDescription: row.CompounrDescription,
                strImageSource: row.strImageSource,
                strImageAttribution: row.strImageAttribution,
                dateModified: row.dateModified
            };

            setTimeout(() => {
                makeAPICall(info);
            }, 4000); // Delay of 4 seconds between each API call
        })
        .on('end', () => {
            console.log('CSV file processing complete.');
        });
}

// Call the function with the filename
processCSV('compound.csv');
