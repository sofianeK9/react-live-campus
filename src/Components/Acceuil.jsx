import { useEffect, useState } from "react";
import BlogCard from "./CardBlog";
import Menu from "./Menu";

const Acceuil = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const title = "Bienvenue sur mon blog !";

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setArticles(data);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch((__err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          {title}
        </h1>
        <div className="space-y-6">
          <BlogCard loading={loading} articles={articles} error={error} onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
