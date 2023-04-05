import blogModel from "../models/blogModel.js";



export const getAllBlogsController = async (req, res) => {
    try {
        const blogs = await blogModel.find({});
        if (!blogs) {
            return res.status(404).send({
                message: "Content not found"
            })
        }

        res.status(200).send({
            success: true,
            blogs,
            message: "content found succefully."
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            error,
            success: false,
            message: "Something went wrong."
        })
    }
}


export const createBlogController = async (req, res) => {
    try {
        const { content, heading } = req.body;
        if (!content) {
            return res.status(404).send({
                message: "Content is required"
            })
        }
        if (!heading) {
            return res.status(404).send({
                message: "heading is  required"
            })
        }
        const data = await new blogModel({
            content,
            heading
        }).save();

        res.status(200).send({
            success: true,
            data,
            message: "Blog created succefully."
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            error,
            success: false,
            message: "Something went wrong."
        })
    }
}


export const updateBlogController = async (req, res) => {
    try {
        const { heading, content } = req.body;
        const { id } = req.params;
        const blog = await blogModel.findByIdAndUpdate(
            id,
            { content, heading },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Blog Updated Successfully",
            blog,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating blog",
        });
    }
};


//delete blog
export const deleteBlogCOntroller = async (req, res) => {
    try {
        const { id } = req.params;
        await blogModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "blog Deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error while deleting blog",
            error,
        });
    }
};



// single category
export const singleBlogController = async (req, res) => {
    try {
        console.log("Here is the problem");
        const blog = await blogModel.findOne({ id: req.params.id });
        console.log(blog);
        res.status(200).send({
            success: true,
            message: "Get SIngle blog SUccessfully",
            blog
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error While getting Single Blog",
        });
    }
};