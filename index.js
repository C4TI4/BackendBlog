// require('dotenv').config(); u can write it here or in package.json (scripts),
//  to add env file functionality. normally vite does it automatically in frontend
const express = require("express");
const app = express();
const dbPool = require("./db/pgClient");
const cors = require("cors");
const { getAllUsers, getSingleUser } = require("./controllers/userControllers");

const port = process.env.PORT || 7000;


// const corsOptions = {
//     origin: 'http://localhost:7000', //  frontend local
//     optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));

// console.log(process.env);

// to see in terminal all the credentials added in env file
app.use(cors());

// const corsOptions = {
//     origin: 'http://localhost:7000', //  frontend local
//     optionsSuccessStatus: 200 
// };


// app.use(cors(corsOptions));

// console.log(process.env);

// to see in terminal all the credentials added in env file


app.get("/", (req, res) => res.send("Welcome to the blog API"));

app.route("/users").get(getAllUsers);
app.route("/users/:user_id").get(getSingleUser);

// Search Bar logic


// app.get('/search', async (req, res) => {
//     try {
//     const { query } = req.query 
//     const { rows } = await pool.query(
//         'SELECT * FROM users WHERE first_name=%$1% OR last_name=%$1% OR email=%$1%',
//         [query])
//     return res.json(rows)
//     } catch (error) {
//     return res.status(500).json({ error: error.message })
//     }
// });

app.listen(port, () => console.log("Welcome"));
