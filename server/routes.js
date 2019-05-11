import routes from 'next-routes';

export default routes()
  .add('/', '/')
  .add('/:username', '/user')
  .add('/:username/repoForm', '/repo')
  .add('/:username/about', '/about')
  .add('/:username/post/:postId', '/post')
  .add('/:username/gist', '/gist');
