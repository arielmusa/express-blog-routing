import express from "express";
import "dotenv/config";
import { posts } from "./posts.js";

const router = express.Router();
const { APP_HOST, APP_PORT } = process.env;
const url = `${APP_HOST}${APP_PORT ? ":" + APP_PORT : ""}`;

// FIX image url for all posts
posts.forEach((item) => {
  item.image = url + item.image;
});

// INDEX
router.get("", (req, res) => {
  res.json(posts);
});

// SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  res.json(post);
});

// STORE
router.post("", (req, res) => {
  res.send("creazione post");
});

// UPDATE
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Aggiornamento dati post id: ${id}`);
});

// MODIFY
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Modifica post id: ${id}`);
});

// DESTROY
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Eliminazione post id: ${id}`);
});

export { router };
