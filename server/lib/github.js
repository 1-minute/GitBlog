import githubStrategy from 'passport-github';
import dotenv from 'dotenv';
import path from 'path';
import User from '../models/user';

const config = dotenv.config({
  path: path.join(
    __dirname,
    `../.env.${process.env.NODE_ENV || 'development'}`,
  ),
});
const github = githubStrategy.Strategy;

module.exports = (app, passport) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((user, done) => {
    done(null, user.id);
  });

  passport.use(
    new github(
      {
        clientID: config.parsed.GITHUB_CLIENT_ID,
        clientSecret: config.parsed.GITHUB_CLIENT_SECRET,
        callbackURL: config.parsed.GITHUB_CALLBACK_URL,
        scope: 'user:email',
      },
      async (accessToken, refreshToken, profile, done) => {
        const userId = profile.id;
        const userName = profile.username;
        return done(null, profile);
        //디비 연결
        //있으면 로그인, 없으면 회원가입
      },
    ),
  );
};
