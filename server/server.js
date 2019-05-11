import next from 'next';
import app from './app';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handler = routes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  app.use(handler);

  app.listen(9090, (err) => {
    if (err) throw err;
    console.log('> Ready on Server Port: 9090');
  });
});
