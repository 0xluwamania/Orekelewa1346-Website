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
exports.saveEntry = void 0;
const entryModel_1 = require("../models/entryModel");
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const saveEntry = (entry) => __awaiter(void 0, void 0, void 0, function* () {
    let _day = new Date(Date.now()).getDay();
    entry.day = !entry.day ? weekday[_day] : entry.day;
    entry.amount = Number(entry.amount);
    entry.week = Number(entry.week);
    const newEntry = yield entryModel_1.Entry.create(entry);
    return newEntry;
});
exports.saveEntry = saveEntry;
//# sourceMappingURL=saveEntry.js.map