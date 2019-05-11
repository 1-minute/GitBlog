import githubStrategy from 'passport-github';
import User from '../db/models';

const Github = githubStrategy.Strategy;

export default (app, passport) => {
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
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
        scope: 'user:email',
      },
      async (accessToken, refreshToken, profile, done) => {
        const userName = profile.login;

        const user = await User.findOne({ name: userName });
        if (user) {
          return done(null, profile);
        }
        return done(null);
      },
    ),
  );
};
