import express from "express";
const router = express.Router();

router
  .get("/user", (req, res) => {
    res.status(201).send();
  })
  .post("/user", (req, res) => {
    res.status(304).send();
  })
  .put("/user", (req, res) => {
    res.status(304).send();
  });

export default router;
