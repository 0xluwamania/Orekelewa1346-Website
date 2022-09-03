import { Request, Response, NextFunction } from "express";
import { Entry } from "../models/entryModel"

const weekday: string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
export const saveEntry = async(entry: IEntry)=> {
    let _day = new Date(Date.now()).getDay()
    entry.day = !entry.day ?  weekday[_day] : entry.day;
    entry.amount = Number(entry.amount);
    entry.week = Number(entry.week);
    const newEntry = await Entry.create(entry);
    return newEntry
}