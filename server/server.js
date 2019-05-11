import next from 'next';
import app from './app';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handler = routes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  app.use(handler);

  console.log(process.env.PORT);
  app.listen(process.env.PORT || 9090, (err) => {
    if (err) throw err;
    console.log('> Ready on Server Port: ' + process.env.PORT || 9090);
  });
});
