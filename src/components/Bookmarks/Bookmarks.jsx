import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmark,readingTime}) => {
    return (
        <>
        <section className="w-full">

            <div className="py-7 w-full text-center">
                <h1 className=" bg-[#6047EC1A] text-2xl font-medium text-[#6047EC] text-center py-6 rounded-xl">Spent time on read : {readingTime} min</h1>
            </div>

            <div className=" bg-[#1111110D] p-7 rounded-xl ">
                <h1 className=" font-bold text-2xl text-[#111111]">Bookmarked Blogs: {bookmark? bookmark.length : '0'} <span></span></h1>
                <div>

                    {
                        bookmark.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} /> )
                    }

                </div>
            </div>

            </section>
            
        </>
    );
};

Bookmarks.propTypes = {

    bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;