const express = require("express");
const app = express();

// Serve static files (optional)
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello, World! Your Node.js app is running under Nginx.");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
