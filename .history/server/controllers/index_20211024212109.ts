import express from 'express';
const router = express.Router();

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Home', content: 'home_content'});
}

export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'About Me', content: 'about_content'});
}

export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Projects', content: 'projects_content'});
}
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Services', content: 'services_content'});
}

export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Contact Me', content: 'contact_content'});
}





// import express from 'express';
// const router = express.Router();

// /* GET home page. */
// router.get('/', function(req:express.Request, res:express.Response, next:express.NextFunction) {
//   res.render('index', { title: 'Home', content: 'home_content'});
// });

// router.get('/home', function(req:express.Request, res:express.Response, next:express.NextFunction) {
//   res.render('index', { title: 'Home', content: 'home_content'});
// });

// router.get('/about', function(req:express.Request, res:express.Response, next:express.NextFunction) {
//   res.render('index', { title: 'About Me', content: 'about_content'});
// });

// router.get('/projects', function(req:express.Request, res:express.Response, next:express.NextFunction) {
//   res.render('index', { title: 'Projects', content: 'projects_content'});
// });

// router.get('/services', function(req:express.Request, res:express.Response, next:express.NextFunction) {
//   res.render('index', { title: 'Services', content: 'services_content'});
// });

// router.get('/contact', function(req:express.Request, res:express.Response, next:express.NextFunction) {
//   res.render('index', { title: 'Contact Me', content: 'contact_content'});
// });

// export default router;
