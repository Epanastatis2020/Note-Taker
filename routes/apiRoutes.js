const fs = require("fs");

//------------------------------------------------
// Functions
//------------------------------------------------

    // Generate a unique ID

    const generateID = () => {
        // create array of IDs already in use
        const existingIDArray = [];
        notesArray.forEach((note) => existingIDArray.push(note.id));

        // generate new ID
        let newID = () => {
            let IDvar = Math.floor(Math.random() * 10000 + 1).toString();
            // check to see if the ID already exists
            if (existingIDArray.includes(IDvar) {
                newID()
            });
            return IDvar;
        };
    };

    const writetoDB = () => {
        fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(notesArray), "UTF8");
    };

//------------------------------------------------
// Setting routes
//------------------------------------------------

// global variable
let notesArray = [];

module.exports = function (app) {

    //------------------------------------------------
    // Getting all stored notes
    //------------------------------------------------
    app.get("/api/notes", function (req, res) {
        // setting db contents to a variable
        let storedData = fs.readFileSync(__dirname + "/.../db/db.json");
        // storing db content variable as JSON array
        notesArray = JSON.parse(storedData);
        // sending the array
        res.send(notesArray);
    });

    //------------------------------------------------
    // Saving new note
    //------------------------------------------------
    app.post("/api/notes", function (req, res) {
        // set new note to received client request
        let newNote = req.body;
        // give new note randomly generated ID
        newNote.id = generateID();
        // push new note to notes array
        notesArray.push(newNote);
        // write notes array back to db
        writetoDB();
        // return new note to client
        res.send(newNote)
    })

    //------------------------------------------------
    // Delete a note
    //------------------------------------------------
    app.delete("/api/notes/:id", function (req, res) {
        // filters the array of notes to exclude the requested id
        notesArray = notesArray.filter((item) => {
            return item.id !== req.params.id;
        });
        // write the updated array back to the db
        writetoDB();
        res.json({ ok: true });
    });

};