const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
