import routes from 'next-routes';

export default routes()
  .add('/', '/')
  .add('/:username', '/user')
  .add('/:username/repoForm', '/repo');
