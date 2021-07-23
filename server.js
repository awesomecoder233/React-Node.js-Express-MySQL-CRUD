const express =  require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./app/routes/turorial.routes")

const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
app.get("/", (req, res) => {
    res.json({message: "Welcome to Arman application"});
});


const PORT = process.env.PORT || 8080;
router(app);
app.listen(PORT, ()=> {
    console.log(`Server is running  on port ${PORT}.`);
});