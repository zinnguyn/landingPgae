module.exports = (req, res, next) => {
  if (req.session && req.session.adminLoggedIn) {
    next();
  } else {
    res.redirect("/admin/login");
  }
};
