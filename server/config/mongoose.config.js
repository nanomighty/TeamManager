const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/teamManagerHW", {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the teamManagerHW database"))
    .catch( (err) => console.log("Something went wrong when connecting to the teamManagerHW database", err))
