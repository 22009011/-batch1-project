const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");
router.get(["/", "/login"], (req, res) => {
  //res.send("<h1>Hello Tutor Joes Salem</h1>");
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/profile", userContoller.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/home", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("home", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/booking", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("booking", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/search", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("search", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/dashboard", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("dashboard", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/tripdetail", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("tripdetail", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/managetrip", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("managetrip", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/usermanage", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("usermanage", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/goa", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("goa", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/alappuzha", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("alappuzha", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/ladakh", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("ladakh", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/varkala", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("varkala", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/hyderabad", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("hyderabad", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/mumbai", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("mumbai", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/agra", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("agra", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/ooty", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("ooty", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/wayanad", userContoller.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("wayanad", { user: req.user });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;