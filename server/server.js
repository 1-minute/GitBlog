import next from 'next';
import app from './app';

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });

const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(9090, (err) => {
    if (err) throw err;
    console.log('> Ready on Server Port: 9090');
  });
});
