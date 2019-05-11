export default (str) => {
  return `${str}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${
    process.env.GITHUB_CLIENT_SECRET
  }`;
};
