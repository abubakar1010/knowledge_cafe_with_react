import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


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
            <div>
                {
                    blogs.map( blog => <Blog key={blog.id} blog={blog} />)
                }
            </div>
        </>
    );
};

export default Blogs;