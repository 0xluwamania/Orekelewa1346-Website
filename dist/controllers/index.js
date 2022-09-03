"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.weekStats = exports.tailorWeek = void 0;
const entryModel_1 = require("../models/entryModel");
const tailorWeek = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { week, tailor } = req.params;
        let weekNum = Number(week);
        const tailorWeekly = yield entryModel_1.Entry.find({ week: weekNum, tailorsName: tailor });
        if (tailorWeekly.length === 0)
            return res.status(201).json({ message: 'No entry for tailor this week' });
        return res.status(201).json({ message: 'succesful', data: tailorWeekly });
    }
    catch (error) {
        return res.status(404).json('Cannot process your request');
    }
});
exports.tailorWeek = tailorWeek;
const weekStats = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { week } = req.params;
        let weekNum = Number(week);
        const weekData = yield entryModel_1.Entry.find({ week: weekNum });
        if (weekData.length === 0)
            return res.status(201).json({ message: 'No entry for tailor this week' });
        return res.status(201).json({ message: 'succesful', data: weekData });
    }
    catch (error) {
        return res.status(404).json('Cannot process your request');
    }
});
exports.weekStats = weekStats;
//# sourceMappingURL=index.js.map