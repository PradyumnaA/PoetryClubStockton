const express = require("express");
const router = express.Router();
const Blog = require("../models/blog.model");

// Root route
router.get("/", (req, res) => {
  res.send("Hi Prada");
});

// Create a new blog
router.post("/create-blog", async (req, res) => {
  try {
    const blogData = req.body;
    const newBlog = await Blog.create(blogData);
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get all blogs
router.get("/get-all-blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single blog by ID
router.get("/blog/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

// Update blog by ID
router.put("/blog/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

// Delete blog by ID
router.delete("/blog/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
    res.json({ message: "Blog deleted", blog: deletedBlog });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
