import {NavLink} from "react-router-dom";
import usePost from "../hooks/usePost.js";
import {useEffect} from "react";

function Home() {

    const {getAllPosts} = usePost();

    useEffect(() => {
        getAllPosts().then(posts => {
            console.log(posts);
        });
    }, []);

    return (
        <main className="flex justify-center size-full">
            <aside id="sidebar" className="flex-1">
                {[{title: "Home"}, {title: "Explore"}, {}].map((option, idx) => {
                    return (
                        <NavLink key={idx} to="">
                            <p>{option.title}</p>
                        </NavLink>
                    );
                })}
            </aside>
            <div id="posts" className="flex-1">

            </div>
        </main>
    );
}

export default Home;