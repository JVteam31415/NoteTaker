const router = require('express').Router();


// bring in /notes route with notes.html

router.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//create permanent route to respond with index.htmlf file when any other route is hit
router.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;