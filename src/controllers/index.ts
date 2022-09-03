import { Request, Response, NextFunction } from "express";
import { Entry } from "../models/entryModel";

export const tailorWeek = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let {week, tailor} = req.params
        let weekNum = Number(week)
        const tailorWeekly = await Entry.find({week: weekNum, tailorsName: tailor}) 
        if(tailorWeekly.length === 0) return res.status(201).json({message: 'No entry for tailor this week'})
        return res.status(201).json({message: 'succesful', data: tailorWeekly})
    } catch (error) {
       return res.status(404).json('Cannot process your request')
    }  
}

export const weekStats = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let {week} = req.params
        let weekNum = Number(week)
        const weekData = await Entry.find({week: weekNum}) 
        if(weekData.length === 0) return res.status(201).json({message: 'No entry for tailor this week'})
        return res.status(201).json({message: 'succesful', data: weekData})
    } catch (error) {
        return res.status(404).json('Cannot process your request')
    }
}