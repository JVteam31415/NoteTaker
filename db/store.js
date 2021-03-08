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
           // console.log(notes)
            //console.log(typeof(notes))
           return JSON.parse(notes)

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
        this.read().then((notes) =>{ 
            //do your stuff here
            //console.log(notes)
            //console.log(typeof(notes))
            var past = JSON.parse(notes)
            past.push(toBeWritten);
            this.write(past);
        })
            
        return this.getNotes();

    }

    //create a function to removeNotes BY ID
    deleteNote(url){
        this.read().then((notes) =>{ 
            //do your stuff here
            var id = url.substring(url.lastIndexOf('/') + 1);
            console.log(notes)
            console.log(typeof(notes))
            var past = JSON.parse(notes)
            console.log("Trying to delete", id)
            //search past for an id that matches id
            var future = past.filter(element=>element.id!=id);


            this.write(future);
        })
        return this.getNotes();
    }
}

module.exports = new Store();