import React, { useState } from 'react';
import Modal from '../lib/Modal';

const BlogCard = ({ loading, articles, error, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleToDelete, setArticleToDelete] = useState(null);

  const handleOpenModal = (article) => {
    setArticleToDelete(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setArticleToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (articleToDelete) {
      onDelete(articleToDelete.id);
    }
    handleCloseModal();
  };

  if (loading) {
    return <p className="text-center text-gray-600">Chargement des articles...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Une erreur est survenue lors du chargement des articles.</p>;
  }

  if (!Array.isArray(articles) || articles.length === 0) {
    return <p className="text-center text-gray-600">Aucun article à afficher.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg relative flex flex-col"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4 flex-grow">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-4"
            >
              Lire l'article
            </a>
            <button
              onClick={() => handleOpenModal(article)}
              className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        articleTitle={articleToDelete ? articleToDelete.title : ''}
      />
    </>
  );
};

export default BlogCard;
