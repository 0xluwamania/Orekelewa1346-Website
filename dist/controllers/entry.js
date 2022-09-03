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
exports.getEntry = exports.add = void 0;
const saveEntry_1 = require("../utils/saveEntry");
const add = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEntry = yield (0, saveEntry_1.saveEntry)(req.body);
        return res.status(200).json({
            message: 'Successful',
            data: newEntry
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.add = add;
const getEntry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({ message: 'Here' });
});
exports.getEntry = getEntry;
//# sourceMappingURL=entry.js.map