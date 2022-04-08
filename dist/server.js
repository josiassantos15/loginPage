"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = express_1.default();
const route = express_2.Router();
app.use(express_1.default.json());
route.get('/', (req, res) => {
    res.json({ message: 'Every body hates Chris!' });
});
app.use(route);
app.listen(3333, () => 'server is running on port 3333');
//# sourceMappingURL=app.js.map