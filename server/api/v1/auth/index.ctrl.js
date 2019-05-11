import User from '../../../db/models';

export const login = async (req, res) => {
  const user = req.user.username.toLowerCase();
  const findUser = await User.findOne({ name: user });
  console.log(findUser, user);
  if (findUser) {
    const { repo } = findUser;
    if (repo) {
      res.redirect(`/${user}`);
    }
  }

  res.redirect(`/${user}/repoForm`);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
