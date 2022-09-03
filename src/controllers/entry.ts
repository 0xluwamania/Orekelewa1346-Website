import { Request, Response, NextFunction } from "express";
import { Entry } from "../models/entryModel";
import { saveEntry } from "../utils/saveEntry";

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newEntry = await saveEntry(req.body)
        return res.status(200).json({
            message: 'Successful',
            data: newEntry
        })
    } catch (error) {
        console.log(error)
    }

}

export const getEntry = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: 'Here' })
}