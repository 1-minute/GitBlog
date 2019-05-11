export const login = (req, res) => {
  res.redirect("/")
};

export const logout = (req, res) => {
  req.logout();
  res.redirect("/");
};