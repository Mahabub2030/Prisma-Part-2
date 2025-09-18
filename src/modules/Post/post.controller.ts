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

export const PostController = {
  creatPost,
};
