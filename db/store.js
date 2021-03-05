const util = require("util");
//this package is used to generate a unique id

const uuidvl = require("uuid") //npmjs.com/package/uuid
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

    //create a function to addNotes

    //create a function to removeNotes BY ID
}

module.exports = new Store();