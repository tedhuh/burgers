var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req,res){
    res.redirect("/burgers")
})

//get route
    router.get("/burgers", function(req,res){
        burger.select(function(data){
            var burgerObject = {
                burger: data
            }
        })
    })

//post

