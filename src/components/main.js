
import NewsArticle from './newsArticle'
import Trends from './trend'
import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../api/fetchnewsdata';
import Signup from './signup';
import Login from './login';
const Main = () => {
    const [articles, setArticles] = useState([]);
    const [trends, setTrends] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages=5
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    const getNewsData = async () => {
        try {
          const query = 'industry'; // Customize the query based on your requirements
          
          const response = await fetchNewsData(query,currentPage);
        //   console.log(response)
          // Extract the relevant information from the API response
          const articlesData = response.data.articles;
        //   const trendsData = response.data.trends;
        setArticles(articlesData)
        console.log(articlesData)
        //   setTrends(trendsData);
        } catch (error) {
          console.error('Error getting news data:', error);
          
        }
      };
      
    useEffect( () => {
      getNewsData()
      
      
    }, [currentPage]);
  
    return (
      <div className="homepage">
        <h1>Latest News Articles</h1>
        <div className="news-articles">
          {articles.map(article => (

            <NewsArticle
            key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          publishedAt={article.publishedAt}
            />
          )
          )
          }
        </div>
        <Signup/>
        <Login/>
        <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
        <h1>Trending Topics</h1>
        {/* <div className="trends">
          {trends.map((trend) => (
            <Trends key={trend.id} title={trend.title} description={trend.description} />
          ))}
        </div> */}
      </div>
    );
  
}

export default Main
