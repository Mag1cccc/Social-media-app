import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "../../config/Firebase";
import { useEffect, useState } from "react";
import { Post } from "./Post";

export const Main = () => {
  const [postsList, setPostsLists] = useState(null);
  const postsRef = collection(dataBase, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="home">
      {postsList?.map((post, id) => (
        <Post post={post} key={id} />
      ))}
    </div>
  );
};
