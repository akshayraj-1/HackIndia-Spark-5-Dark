import PropTypes from "prop-types";
import cn from "../../utils/cn.util.js";

function MainBackground({ children, className }) {
    return (
        <div className="relative size-full">
            <div className={cn("absolute z-[2] h-full w-full", className)}>
                {children}
            </div>
        </div>
    );
}


MainBackground.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default MainBackground;