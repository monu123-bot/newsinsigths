
import NewsArticle from './newsArticle'
import Trends from './trend'
import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../api/fetchnewsdata';
import Signup from './signup';
import Login from './login';
import AuthDetails from './authDetails';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

const Main = () => {
  
    const [articles, setArticles] = useState([]);
    const [squery,setsQuery] = useState('industry')
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
          
          
          const response = await fetchNewsData(squery,currentPage);
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


        <AuthDetails/>
        
        <div class="search-bar">
  <input type="text" value={squery}  onChange={(e)=>{setsQuery(e.target.value)}} id="search-input" placeholder="Enter search query"/>
  <button onClick={getNewsData} id="search-button">Search</button>
  </div>

  
<br/>


       <div className='qshow'>
        <small>Results for {squery}</small>
       </div>
        <div className="news-articles">
          {articles.map(article => (
            <>
            <div className='singlearticle'>
           <a href={article.url} >
            <NewsArticle
            key={article.id}
          title={article.title}
          description={article.description}
          imageUrl={article.urlToImage}
          publishedAt={article.publishedAt}
            />
            </a>
            </div>
</>
          )
          )
          }
        </div>

        <br/>
        <div className="pagination1">

       


    <Pagination>
     
      <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
      
      <Pagination.Item active>{currentPage}</Pagination.Item>
      
      <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
      
    </Pagination>

     
      </div>
     

      

      
      
        <br/>
        {/* <h1>Trending Topics</h1> */}
        {/* <div className="trends">
          {trends.map((trend) => (
            <Trends key={trend.id} title={trend.title} description={trend.description} />
          ))}
        </div> */}
      </div>
    );
  
}

export default Main
