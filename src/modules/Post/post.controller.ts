import { Request, Response } from "express";
import { PostService } from "./post.service";

const creatPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.params.search || "";
    const isFeatured = req.query.isFeatured
      ? req.query.isFeatured === "true"
      : undefined;
    const result = await PostService.getAllPosts({
      page,
      limit,
      search,
      isFeatured,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts", details: err });
  }
};

const getPostById = async (req: Request, res: Response) => {
  const post = await PostService.getPostById(Number(req.params.id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json(post);
};

const updatePost = async (req: Request, res: Response) => {
  const post = await PostService.updatePost(Number(req.params.id), req.body);
  res.json(post);
};

const deletePost = async (req: Request, res: Response) => {
  await PostService.deletePost(Number(req.params.id));
  res.json({ message: "Post deleted" });
};

export const PostController = {
  creatPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
