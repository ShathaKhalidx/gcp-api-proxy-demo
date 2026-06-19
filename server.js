const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Your GCP endpoint
app.get("/proxy", async (req, res) => {

    try {

        // Call external public server
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();


        // Return external server response
        res.json({
            message: "Response came through GCP",
            source: "jsonplaceholder",
            data: data
        });


    } catch(error) {

        res.status(500).json({
            error: error.message
        });

    }

});


app.listen(PORT, () => {
    console.log(`GCP proxy running on port ${PORT}`);
});