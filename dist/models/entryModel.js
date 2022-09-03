"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const entrySchema = new mongoose_1.default.Schema({
    description: {
        type: String,
        required: [true, "A Description of the cloth wasnt provided"],
    },
    customerName: {
        type: String,
        required: [true, 'A Customer name wasnt provided']
    },
    tailorsName: {
        required: [true, 'A tailor should be picked'],
        enum: ['Ade', 'Emma', 'Andrew', 'Stanley', 'Joe', 'Pat', 'Grace'],
        type: String,
    },
    amount: {
        type: Number,
        default: 4.5,
        required: [true, 'Please provide the amount for the tailor']
    },
    day: {
        type: String,
        required: [true, 'The day it was sown is required']
    },
    week: {
        type: Number,
        required: [true, 'The day this piece was made is required']
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
exports.Entry = mongoose_1.default.model('Entry', entrySchema);
//# sourceMappingURL=entryModel.js.map