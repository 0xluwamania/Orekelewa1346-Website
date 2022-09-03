import express, {Request, Response, NextFunction} from 'express'
import { add, getEntry } from '../controllers/entry';
const router = express.Router();

router.get('/', getEntry)
router.post('/', add)


module.exports = router;