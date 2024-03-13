import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {

        const callApi = async () => {

            const response = await fetch('blogs.json')
            const data = await response.json()

            setBlogs(data)

        }
        callApi()
    },[])
    console.log(blogs);
    return (
        <>
            <h1>blogs</h1>
        </>
    );
};

export default Blogs;