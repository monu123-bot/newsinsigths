
import NewsArticle from './newsArticle'
import Trends from './trend'
import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../api/fetchnewsdata';
import Signup from './signup';
import Login from './login';
import AuthDetails from './authDetails';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import ScrollButton from './scrollbutton';

const Main = () => {
  function formatDateToDDMMYYYY(date) {
    const d = new Date(date);
  
    // Get day, month, and year from the date object
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
  
    // Combine day, month, and year with dashes in between
    const formattedDate = `${year}-${month}-${day}`;
   console.log(formattedDate)
    return formattedDate;
  }

  // Get the current date in milliseconds using Date.now()


// Convert the current date to "dd-mm-yyyy" format
const [isloading,setIsLoading] = useState(false)
   const [startDate,setStartDate] = useState(formatDateToDDMMYYYY(Date.now()))
   const [endDate,setEndDate] = useState(formatDateToDDMMYYYY(Date.now()- 86400000 ))
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
          
          setIsLoading(true)
          const response = await fetchNewsData(squery,currentPage,startDate,endDate);
          if (response){
            setIsLoading(false)
          }
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
      <>
      <div className="homepage">


        <AuthDetails/>
        
        <div class="search-bar">
  <input type="text" value={squery}  onChange={(e)=>{setsQuery(e.target.value)}} id="search-input" placeholder="Enter search query"/>
  
 

</div>
<div className='search-date' >
<label for="start">Start date:</label>

<input onChange={(e)=>{setStartDate(e.target.value)}} type="date" id="start" name="trip-start"
       value={startDate}
       />

<label for="end">End date:</label>

<input onChange={(e)=>{setEndDate(e.target.value)}} type="date" id="start" name="trip-start"
       value={endDate}
       />

</div>
<div className='searchbtn' >
<button onClick={getNewsData} id="search-button">Search</button>
</div>

<br/>


       <div className='qshow'>
        <small>Results for {squery}</small>
       </div>
        <div className="news-articles">
          {  isloading ?  <p className='loading-p'>Loading....</p>:  articles.map(article => (
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

      <ScrollButton/>
      </>
    );
  
}

export default Main
