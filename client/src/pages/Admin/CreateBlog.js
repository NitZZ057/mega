import Layout from "./../../components/Layout/Layout";
import React, { useState, useEffect } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await axios.post("http://localhost:8080/api/v1/blog/create-blog", {
                heading,
                content
            })
            if (!data) {
                toast.error("Something went wrong.");

            }
            else {
                toast.success("Blog post created successfully.")
                navigate("/dashboard/admin/create-blog")
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");

        }
    }
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Create Blog</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text" onChange={(e) => setHeading(e.target.value)} value={heading} className="form-control" id="exampleInputEmail1" placeholder="Enter Heading" />

                            </div>
                            <div className="form-group mb-3">
                                <textarea onChange={(e) => setContent(e.target.value)} value={content} id="w3review" className="form-control" name="w3review" rows="10" cols="80" placeholder="Enter the blog content.">

                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateBlog