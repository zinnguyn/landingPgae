const express = require("express");
const router = express.Router();
const db = require("../config/db"); // ← đúng đường dẫn tới db.js

router.post("/register", async (req, res) => {
  try {
    const { name, phone, designType, message } = req.body;
    const sql = `INSERT INTO customers (name, phone, designType, message) VALUES (?, ?, ?, ?)`;
    await db.execute(sql, [name, phone, designType, message]);

    res.render("submitForm", { name, phone, designType, message });
  } catch (error) {
    console.error(error);
    res.status(500).send("Lỗi server");
  }
});

module.exports = router;
