import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({blog}) => {

    console.log(blog);

    const {cover,title, author, author_image, post_date, reading_time, hashtags} = blog

    return (
        <>
            <section>
            <div className=" border-b-2 border-dashed py-7 w-[845px]">
                <img className="w-[845px] h-[450px]" src={cover} alt="" />
                <div className=" flex justify-between w-full my-8 px-3 items-center" >
                <div className="flex gap-6 items-center">
                    <img src={author_image} className=" w-[60px] h-[60px]" alt="" />
                    <div>
                        <h1 className=" text-2xl font-bold">{author}</h1>
                        <p className="font-medium">{post_date}</p>
                    </div>
                </div>
                <div className=" flex items-center">
                    <span className="text-lg font-medium">{reading_time} read</span>
                    <button className=" ml-3 text-3xl text-red-700"><CiBookmarkPlus /></button>
                    </div>
                </div>
                <h1 className=" text-4xl font-bold my-7">{title}</h1>
                <div className="flex gap-7 text-xl font-medium">

                    {
                        hashtags.map( element => <p key={element}>#{element}</p>)
                    }

                </div>
                <p className="text-[#6047EC] underline text-xl font-semibold pt-3 cursor-pointer">Mark As read </p>
            </div>
            </section>
        </>
    );
};

export default Blog;