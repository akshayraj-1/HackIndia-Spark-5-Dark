import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./components/UI/Navbar.jsx";


function App() {
    return (
        <>
            <Navbar/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </>
    );
}

export default App;
