import {motion} from "framer-motion";
import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";
function Post({id, author, textContent, images, onClick, styles}) {
    return (
        <motion.div className={cn("bg-secondary rounded-md border border-tertiary")}>
            <div className="flex items-center justify-start">
                <motion.img src={author?.profile} className="size-14 rounded-full"/>
                <div>
                    <p className="text-primaryText font-medium">{author?.name}</p>
                    <p className="text-secondaryText font-medium">{"@ " + author?.username}</p>
                </div>
            </div>
        </motion.div>
    );
}

Post.propTypes = {
    id: PropTypes.string,
    author: PropTypes.string,
    textContent: PropTypes.string,
    images: PropTypes.array,
    onClick: PropTypes.func
}

export default Post;