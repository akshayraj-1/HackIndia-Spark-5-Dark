import {motion} from "framer-motion";
import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";

function Post({ id, owner, timestamp, content, image, onClick, styles }) {
    return (
        <motion.div className={cn("flex flex-col gap-2 bg-secondary/50 rounded-xl px-4 py-4 border border-tertiary overflow-hidden")}>
            <div className="flex flex-col items-start justify-start">
                <p className="text-primaryText font-medium">{owner}</p>
                <p className="text-secondaryText font-medium">{new Date(timestamp * 1000).toLocaleString()}</p>
            </div>
            {
                content && <p className="text-primaryText">{content}</p>
            }
            {
                image && <img src={image} className="h-86 aspect-square object-cover"/>
            }
        </motion.div>
    );
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    content: PropTypes.string,
    image: PropTypes.string,
    onClick: PropTypes.func
}

export default Post;