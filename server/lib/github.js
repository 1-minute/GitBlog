import githubStrategy from 'passport-github';

const Github = githubStrategy.Strategy;

export default (app, passport, config) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
    done(null, user.id);
  });

  passport.use(
    new Github(
      {
        clientID: config.parsed.GITHUB_CLIENT_ID,
        clientSecret: config.parsed.GITHUB_CLIENT_SECRET,
        callbackURL: config.parsed.GITHUB_CALLBACK_URL,
        scope: 'user:email',
      },
      async (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      },
    ),
  );
};
