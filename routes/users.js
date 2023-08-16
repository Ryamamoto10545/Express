const express = require("express");

const router = express.Router()

router.get("/",(req,res) => {
res.send("User list")
})

router.get("/new",(req,res) => {
    res.send("User Neq Form")
    })

    module.exports = router