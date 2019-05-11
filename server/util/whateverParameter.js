import dotenv from 'dotenv';
import path from 'path';

const config = dotenv.config({
  path: path.join(
    __dirname,
    `../.env.${process.env.NODE_ENV || 'development'}`,
  ),
});

export default (str) => {
  return `${str}?client_id=${config.parsed.GITHUB_CLIENT_ID}&client_secret=${
    config.parsed.GITHUB_CLIENT_SECRET
  }`;
};
