import {NavLink} from "react-router-dom";
import usePost from "../hooks/usePost.js";
import {useEffect, useState} from "react";
import PostCard from "../components/UI/PostCard.jsx";
import {useWalletContext} from "../contexts/useWalletContext.jsx";

function Home() {

    const [posts, setPosts] = useState([]);
    const { account, connectWallet, disconnectWallet } = useWalletContext();
    const { getAllPosts, createPost } = usePost();

    useEffect(() => {
        getAllPosts().then(posts => {
            setPosts(posts);
        });

    }, []);

    return (
        <main className="relative flex justify-center items-start gap-4 md:gap-6 size-full py-4 px-5 sm:px-8">

            <div className="sticky top-20 bg-secondary/70 rounded-md border-2 border-tertiary px-4 py-2">
                <NavLink to="/create" onClick={createPost}>Create</NavLink>
            </div>

            <div id="posts" className="relative flex flex-col gap-3 h-full min-h-full w-full sm:w-[320px] md:w-[600px]">
                {
                    posts?.map((post) => {
                        console.log(post);
                        return (
                            <PostCard key={post["0"]} id={post["0"].toString()}
                                      owner={post["1"]}
                                      content={post["2"]}
                                      image={post["3"]} t
                                      timestamp={parseInt(post["4"])}
                            />
                        );
                    })
                }
            </div>
        </main>
    );
}

export default Home;