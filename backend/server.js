require('dotenv').config();
//const db = pgp(`postgres://${process.env.user}:${process.env.password}@localhost:5432/postgres`);

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});*/
db.sequelize.sync();

const usersRouter = require('./routes/user.routes');
app.use('/api/users/', usersRouter);

const albumsRouter = require('./routes/album.routes');
app.use('/api/albums/', albumsRouter);

const artistsRouter = require('./routes/artist.routes');
app.use('/api/artist/', artistsRouter);

const genresRouter = require('./routes/genre.routes');
app.use('/api/genres/', genresRouter);

const tracksRouter = require('./routes/track.routes');
app.use('/api/tracks/', tracksRouter);

app.get("/", (req, res) => {
    res.json({ message: "Hi dear fellow!" });
});

const serverPort = process.env.Port;
app.listen(serverPort, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Server is listening on ${serverPort}`)
})

/*function getAllCommits(name) {
	return db.query('SELECT * FROM users WHERE name = $1', [ name ]); 
};*/
