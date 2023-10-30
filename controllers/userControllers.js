const dbPool = require("../db/pgClient");

const getAllFilms = async (req, res) => {
  try {
    const { rows } = await dbPool.query(
      `SELECT user_id, first_name, last_name, email, password, avatar FROM users;`
    );

    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getSingleFilm = async (req, res) => {
  try {
    const { id } = req.params;

    if (!+id) return res.status(400).json({ error: "Id must be a number" });

    const {
      rows: [oneFilm],
    } = await dbPool.query(
      `SELECT  user_id, first_name, last_name, email, password, avatar FROM users WHERE user_id=$1`,
      [id]
    );

    if (!oneFilm)
      return res.status(404).json({ error: "User could not be found" });

    res.json(oneFilm);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllFilms,
  getSingleFilm,
};
