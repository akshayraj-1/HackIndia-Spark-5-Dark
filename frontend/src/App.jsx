import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./components/UI/Navbar.jsx";
import MainBackground from "./components/Backgrounds/MainBackground.jsx";


function App() {
    return (
        <MainBackground className="overflow-hidden">
            <Navbar/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </MainBackground>
    );
}

export default App;
