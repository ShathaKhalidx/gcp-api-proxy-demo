const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {

    try {

        // Direct communication with external server
        const response = await fetch(
            "https://api.github.com/users/octocat"
        );

        const data = await response.json();

        res.json({
            message: "Connected successfully",
            externalServer: "GitHub",
            data: data
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});