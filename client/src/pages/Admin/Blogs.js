import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout';
import { Link } from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [headings, setHeadings] = useState("");

    const getAllBlogs = async (e) => {
        try {
            const { data } = await axios.get("http://localhost:8080/api/v1/blog/blogs");
            if (!data) {
                toast.error("something went wrong.")
            }
            else {
                toast.success("Get all product")
                setBlogs(data.blogs)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong.")
        }
    }

    useEffect(() => {
        getAllBlogs();
    }, [])
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>All  Blogs</h1>
                        {blogs?.map((b) => (
                            <div>
                                <h4>
                                    <Link
                                        key={b._id}
                                        to={`/dashboard/admin/update-blogs/${b._id}`}
                                        className="product-link"
                                    >
                                        {b.heading}
                                    </Link>
                                </h4>
                                <p>{b.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blogs