const util = require("util");
const fs = require("fs");
//this package is used to generate a unique id

const { v4: uuidv4 } = require('uuid');
;//npmjs.com/package/uuid
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



//create the class
class Store{
    read(){
        return readFileAsync("db/db.json", "utf8")
    }
    write(note){
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    //create a function to getNotes
    getNotes(){
        return this.read().then((notes) =>{ 
            //do your stuff here
            console.log(notes)
            console.log(typeof(notes))
           return [JSON.parse(notes)]

        })
        
    }

    //create a function to addNotes
    addNotes(note){
        //give id to note
        console.log("going to write",note.body);
        var id = uuidv4();
        var toBeWritten = note.body;
        toBeWritten["id"]=id
        //note["id"] = id;
        //console.log(note);
        this.write(toBeWritten);
        return this.getNotes();

    }

    //create a function to removeNotes BY ID
    removeNotes(id){

    }
}

module.exports = new Store();