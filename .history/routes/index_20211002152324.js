"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { 
        title: 'Home', 
        content: "Hello there! My name is Lester Dan Goze and I'm a 2nd year student at Centennial College." +
        " This is my 3rd semester of the Software Engineering Technician Program and Ive so far enjoyed the journey." +
        " When I'm not busy doing assignments and reading lecture notes, I enjoy playing video games and riding trails on my bike." +
        
        
});
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me' });
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects' });
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me' });
});
exports.default = router;
//# sourceMappingURL=index.js.map