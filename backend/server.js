require('dotenv').config() 
const app = require("./src/app")
const connnetToDB = require('./src/config/database.js')

connnetToDB();

app.listen(3000, () => {
    console.log("server is running on port 3000");
})