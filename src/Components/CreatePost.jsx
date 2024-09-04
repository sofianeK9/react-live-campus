import React, { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: posts.length + 1,
      title,
      description,
      content,
      date: new Date().toISOString(),
    };

    setPosts([...posts, newPost]);

    setTitle("");
    setDescription("");
    setContent("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container mx-auto p-4 flex-1">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Créer un nouvel article
        </h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Titre
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-semibold mb-2"
            >
              Contenu
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg h-40"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Créer l'article
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Articles créés
          </h2>
          <ul className="space-y-4 mt-4">
            {posts.map((post) => (
              <li key={post.id} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p>{post.description}</p>
                <small className="text-gray-500">
                  {new Date(post.date).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
