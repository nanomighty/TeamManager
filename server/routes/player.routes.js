const PlayerController = require('../controllers/player.controller');

module.exports = (app) => {
    app.get("/api/player", PlayerController.getAllPlayer);
    app.post("/api/player", PlayerController.createAPlayer);
    app.get("/api/player/:_id", PlayerController.getAPlayer);
    app.put("/api/player/:_id", PlayerController.updatePlayer);
    app.delete("/api/player/:_id", PlayerController.deletePlayer);
}


