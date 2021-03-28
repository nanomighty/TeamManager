const Player = require('../models/player.model');

module.exports = {
    getAllPlayer: (req, res) => {
        Player.find({})
            .sort({playerName: "ascending"})
            .then(players => {res.json(players)})
            .catch(err => {
                console.log("error found in getAllPlayer");
                res.json(err);
            });
    },
    createAPlayer: (req, res) => {
        const { playerName, preferredPosition } = req.body;
        Player.create({
            playerName,
            preferredPosition
        })
            .then((newPlayer) => {
                res.json(newPlayer);
            })
            .catch((err) => {
                console.log("error found in createAPlayer");
                res.json(err);
            });
    },
    getAPlayer: (req, res) => {
        Player.findOne({_id: req.params._id})
            .then(player => {res.json(player)})
            .catch(err => {
                console.log("error found in getAPlayer");
                res.json(err);
            });
    },
    updatePlayer : (req, res) => {
        Player.findOneAndUpdate( {_id: req.params._id}, req.body, {
            new: true,
            runValidators: true,
        })
                .then(updatedPlayer => {res.json(updatedPlayer)})
                .catch(err => {
                    console.log("error found in updatePlayer");
                    res.json(err);
                });
    },
    deletePlayer : (req, res) => {
        Player.deleteOne({_id: req.params._id})
            .then(deletedPlayer => {res.json(deletedPlayer)})
            .catch(err => {
                console.log("error found in deletePlayer");
                res.json(err);
            });
    }
}