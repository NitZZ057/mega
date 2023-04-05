import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import AdminMenu from '../../components/Layout/AdminMenu'
import { useParams } from 'react-router-dom';


const UpdateBlog = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const params = useParams();


    const getsingleBlog = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/blog/single-blog/${params.id}`);
            setHeading(data.blog.heading);
            setContent(data.blog.content);
        } catch (error) {
            console.log(error);
            toast.error("Something went in while updating the product.")
        }
    }


    const handleSubmit = async (e) => {
        try {
            const data = await axios.put(`http://localhost:8080/api/v1/blog/update/${params.id}`, { heading, content });
            if (!data) {
                toast.error("Something went wrong");
            }
            else {
                toast.success("Product updated succefully.");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.")
        }
    }

    useEffect(() => {
        getsingleBlog()
    }, [])

    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Update Blog</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text" onChange={(e) => setHeading(e.target.value)} value={heading} className="form-control" id="exampleInputEmail1" placeholder="Enter Heading" />

                            </div>
                            <div className="form-group mb-3">
                                <textarea onChange={(e) => setContent(e.target.value)} value={content} id="w3review" className="form-control" name="w3review" rows="10" cols="80" placeholder="Enter the blog content.">

                                </textarea>
                            </div>
                            <div className='d-flex'>
                                <button type="submit" className="btn btn-primary m-3">SUBMIT</button>
                                <button type="submit" className="btn btn-danger m-3">DELETE</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UpdateBlog