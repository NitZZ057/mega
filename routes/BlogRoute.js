


import express from "express";
const router = express.Router();

import { createBlogController, deleteBlogCOntroller, getAllBlogsController, singleBlogController, updateBlogController } from "../controllers/BlogController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

router.get("/blogs", getAllBlogsController);



router.put("/update/:id", requireSignIn, isAdmin, updateBlogController);


router.get("/single-blog/:id", singleBlogController);


router.delete("/delete/:id", requireSignIn, isAdmin, deleteBlogCOntroller);


router.post("/create-blog", requireSignIn, isAdmin, createBlogController)





export default router;
