import express, {Request, Response, NextFunction} from 'express'
import {tailorWeek, weekStats} from '../controllers/index'
var router = express.Router();

router.get('/:week', weekStats)
router.get('/:week/:tailor', tailorWeek)
module.exports = router;
