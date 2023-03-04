const express = require('express');
const router = express.Router();
const routerGenre = require('./genre.router')
const routerActor = require('./actor.router')
const routerDirector = require('./director.router')
const routerMovie = require('./movie.router')

router.use('/genres',routerGenre )
router.use('/actors',routerActor )
router.use('/directors',routerDirector )
router.use('/movies',routerMovie )

module.exports = router;