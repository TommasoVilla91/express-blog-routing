const express = require("express");
const router = express.Router();
const recipesList = require("../data/food");

// index
router.get('/', (req, res) => {
    res.json();
});

