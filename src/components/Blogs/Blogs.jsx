import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types';

const Blogs = ({handleBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {

        const callApi = async () => {

            const response = await fetch('blogs.json')
            const data = await response.json()

            setBlogs(data)

        }
        callApi()
    },[])
    // console.log(blogs);
    return (
        <>
            <div>
                {
                    blogs.map( blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} />)
                }
            </div>
        </>
    );
};

Blogs.propTypes = {

    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blogs;