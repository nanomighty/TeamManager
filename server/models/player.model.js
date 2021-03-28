const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema ({

    playerName: {
        type: String,
        // required: [true, "*You must include your name"],
        minlength: [2, "*Name must be at least 2 characters in length"]
    },
    preferredPosition : {
        type: String,
        minlength: [2, "*Your preferred position must be at least 2 characters in length"]
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model('Player', PlayerSchema);




// OTHER MODEL EXAMPLES:
// artist: {
//     type: String,
//     required: [true, "You must have an artist for a karaoke song"],
//     minlength: [3, "Your artist's name must be at least 3 characters long"],
// },
// albumArtUrl: {
//     type: String,
//     minlength: [10, "Your album art URL must be at least 10 characters long"],

// },
// videoUrl : {
//     type: String,
//     minlength: [10, "Your karaoke video URL must be at least 10 characters long"],
// },
// genre: {
//     type: String,
//     required: [true, "You must have a genre for a karaoke song"],
//     enum: ["Pop", "Country", "Hip Hop", "Rock"],
// },
// year: {
//     type: Number,
//     required: [true, "You must have a year for this karaoke song"],
//     min: [1930, "The song must be written no earlier than 1930"],
// },
// licensed: {
//     type: Boolean,
//     default: true,
// },