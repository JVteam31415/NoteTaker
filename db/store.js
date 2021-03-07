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
        var output = this.read()
        console.log(typeof(output));
        console.log(output.title)
        return output;
    }

    //create a function to addNotes
    addNotes(note){
        //give id to note
        console.log(note.body);
        var id = uuidv4();
        //note["id"] = id;
        //console.log(note);
        this.write(note.body);
        return this.read();

    }

    //create a function to removeNotes BY ID
    removeNotes(id){

    }
}

module.exports = new Store();