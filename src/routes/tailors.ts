import express, {Request, Response, NextFunction} from 'express'
import { getTailors } from '../controllers/tailors';
const router = express.Router();

router.get('/', getTailors)


module.exports = router;
