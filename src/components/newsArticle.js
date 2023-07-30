import React from 'react';

const NewsArticle = ({ title, description, imageUrl, publishedAt }) => {
  return (
    <div className="news-article">
      <img src={imageUrl} alt={title} className="article-image" />
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{description}</p>
      <p className="article-published-at">{publishedAt}</p>
    </div>
  );
};

export default NewsArticle;