"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tailors_1 = require("../controllers/tailors");
const router = express_1.default.Router();
router.get('/', tailors_1.getTailors);
module.exports = router;
//# sourceMappingURL=tailors.js.map