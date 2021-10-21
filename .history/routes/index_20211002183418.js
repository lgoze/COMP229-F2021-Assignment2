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
        content: 'home_content'
});
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home',
    content: 'home_content'
    
 });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', 
    content: 'about_content'
    
});
});
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects',
    content: "I don't have much content on projects right now but I have plans to update some during the semester." +
    "*******************include photos"
    
});
});
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services',
    content: "Our services include:"
    
});
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Me' ,
    content: "Our services include:"

});
});

exports.default = router;
//# sourceMappingURL=index.js.map