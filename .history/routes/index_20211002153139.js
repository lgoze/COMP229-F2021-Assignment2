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
        " After I graduate, I hope to become a full stack developer and make a lot of interesting apps and websites along the way" +
        " When I'm not busy doing assignments and reading lecture notes, I enjoy playing video games and riding trails on my bike." +
        " Have a look around my website and will be updating it as the weeks progress." +
        " Feel free to check out my contact page if you want to get a hold of me! I frequently check my emails respond within 2 days."
});
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home',
    content: "Hello there! My name is Lester Dan Goze and I'm a 2nd year student at Centennial College." +
    " This is my 3rd semester of the Software Engineering Technician Program and Ive so far enjoyed the journey." +
    " After I graduate, I hope to become a full stack developer and make a lot of interesting apps and websites along the way" +
    " When I'm not busy doing assignments and reading lecture notes, I enjoy playing video games and riding trails on my bike." +
    " Have a look around my website and will be updating it as the weeks progress." +
    " Feel free to check out my contact page if you want to get a hold of me! I frequently check my emails respond within 2 days."
 });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', DF "});
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects',
    content: "I don't have much content on projects right now but I have plans to update some during the semester."
});
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me' });
});
exports.default = router;
//# sourceMappingURL=index.js.map