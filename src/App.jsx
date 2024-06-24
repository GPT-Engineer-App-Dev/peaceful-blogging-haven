import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode, Button } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      onClick={toggleColorMode}
      position="fixed"
      top="4"
      right="4"
      zIndex="docked"
    >
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

function App() {
  const [posts, setPosts] = useState([
    {
      title: "My First Blog Post",
      excerpt: "This is the beginning of my blogging journey. Join me as I share my thoughts and experiences!",
      imageUrl: "https://via.placeholder.com/800x400"
    },
    {
      title: "The Art of Coding",
      excerpt: "Coding is not just about writing lines of code, it's about solving problems and creating solutions.",
      imageUrl: "https://via.placeholder.com/800x400"
    },
    {
      title: "Exploring Nature",
      excerpt: "There's nothing quite like the peace and tranquility of nature. Let's explore some beautiful landscapes together.",
      imageUrl: "https://via.placeholder.com/800x400"
    }
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <>
      <ColorModeToggle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index posts={posts} deletePost={deletePost} />} />
          <Route path="/new-post" element={<NewPost addPost={addPost} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;