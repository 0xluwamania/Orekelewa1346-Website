"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../controllers/index");
var router = express_1.default.Router();
router.get('/:week', index_1.weekStats);
router.get('/:week/:tailor', index_1.tailorWeek);
module.exports = router;
//# sourceMappingURL=index.js.map