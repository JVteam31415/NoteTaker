const router = require("express").Router();

const store = require("../db/store")

//make a GET requestwith all notes from the database

router.get("/notes", (req,res)=>{
    store
    .getNotes()
    .then( (notes)=>{
        console.log("getting in apiroutes "+typeof(notes) );
        console.log(notes)
        //console.log("returning"+typeof(res.json(notes)))
        return res.json(notes);
    })
    .catch( (err)=>res.status(500).json(err))

})

//post request
router.post("/notes", (req,res)=>{
    store
    .addNotes(req)
    .then( (notes)=>{
        console.log("posting in apiroutes "+typeof(notes) );
        console.log(notes)
        return res.json(notes);
    })
    .catch( (err)=>res.status(500).json(err))

})
//delete request


module.exports = router;