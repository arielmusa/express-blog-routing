import express from "express";
import "dotenv/config";
import { posts } from "./posts.js";

const router = express.Router();

router.get("", (req, res) => {
  res.json(posts);
});

export { router };
