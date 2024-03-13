import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    console.log(bookmark);
    const {title} = bookmark
    return (
        <>
            <div className="p-7 rounded-xl bg-slate-200 shadow-xl mt-6">
                <h1 className="font-medium text-lg">{title}</h1>
            </div>
        </>
    );
};

Bookmark.propTypes = {

    bookmark: PropTypes.object.isRequired
}

export default Bookmark;