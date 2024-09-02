import {Link} from "react-router-dom";
import Button from "./Button.jsx";

function Navbar() {
    return (
        <nav className="sticky top-0 w-full flex justify-between items-center px-5 sm:px-8 py-4 border-b-2 border-b-secondary backdrop-blur bg-primary/50">
            <Link className="font-semibold text-2xl" to="/">freezone</Link>
            <div>
                <Button variant="secondary" label="Join Now" size="md" className="border-accent/30"/>
            </div>
        </nav>
    );
}

export default Navbar;