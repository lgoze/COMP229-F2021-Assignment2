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
        content: " MISSION STATEMENT: LG inc. is committed to provide unparalleled software solutions with the business and user experience in mind." +
        " We will comply to the regulations and code of conducts as part of our responsibility in securing a strong relationship with our company partners and the public." +
        " LG inc.’s ethical values is the foundation of our company and will continue to be our priority.",
        images: 'logo1'
     
});
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home',
    content: "MISSION STATEMENT: LG inc. is committed to provide unparalleled software solutions with the business and user experience in mind." +
    " We will comply to the regulations and code of conducts as part of our responsibility in securing a strong relationship with our company partners and the public." +
    " LG inc.’s ethical values is the foundation of our company and will continue to be our priority."
    
 });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Me', 
    content: "Hello there! My name is Lester Dan Goze and I'm a 2nd year student at Centennial College." +
    " This is my 3rd semester of the Software Engineering Technician Program and Ive so far enjoyed the journey." +
    " After I graduate, I hope to become a full stack developer and make a lot of interesting apps and websites along the way" +
    " When I'm not busy doing assignments and reading lecture notes, I enjoy playing video games and riding trails on my bike." +
    " Have a look around my website and will be updating it as the weeks progress." +
    " Feel free to check out my contact page if you want to get a hold of me! I frequently check my emails respond within 2 days." +
    "***************************************Include PDF copy of resume here"
    
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