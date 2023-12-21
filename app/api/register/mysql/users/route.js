// Import required modules
const { NextResponse } = require("next/server");
const mysql = require('mysql2/promise');
const { GetDBSettings } = require('@/sharedCode/common');

// Populate the connection parameters
let connectionParams = GetDBSettings();

// Define and export the GET handler function
export async function GET(request) {
    try {
        // Connect to the database
        const connection = await mysql.createConnection(connectionParams);

        // Create a query to fetch data
        let get_exp_query = "SELECT * FROM students.std_profile";

        // Array to pass parameters to the SQL query
        let values = [];

        // Execute the query and retrieve the results
        const [results] = await connection.execute(get_exp_query, values);

        // Close the database connection
        connection.end();

        // Return the results as a JSON API response
        return NextResponse.json(results);
    } catch (err) {
        console.log('ERROR: API - ', err.message);

        const response = {
            error: err.message,
            returnedStatus: 200,
        };

        // Return an error response
        return NextResponse.json(response, { status: 200 });
    }
}

