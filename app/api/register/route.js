// Import the Request and Response classes
const { NextResponse, NextRequest } = require("next/server");

// Define and export the GET handler function
export async function GET(request) {
    // This is going to be my JSON response
    const results = {
        message: "Hello World!",
    };

    // Respond with the JSON object
    return NextResponse.json(results);
}


