import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home', content: 'home'});
});

router.get('/home', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Home', content: 'home' });
});

router.get('/about', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'About Me', content: 'home' });
});

router.get('/projects', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Projects', content: 'home' });
});

router.get('/services', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Services', content: 'home' });
});

router.get('/contact', function(req:express.Request, res:express.Response, next:express.NextFunction) {
  res.render('index', { title: 'Contact Me', content: 'home' });
});

export default router;
