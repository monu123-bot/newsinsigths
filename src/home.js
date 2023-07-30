import React from 'react'
import './homestyle.css'
import Nav from './components/nav'
import Main from './components/main'
import Footer from './components/footer'
import { fetchNewsData } from './api/fetchnewsdata';
const Home = () => {
  
    const getNewsData = async () => {
        try {
          const query = 'industry'; // Customize the query based on your requirements
          const articles = await fetchNewsData(query);
          const extractedData = articles.map((article) => ({
            title: article.title,
            description: article.description,
            imageUrl: article.urlToImage,
            publishedAt: article.publishedAt,
          }));
          // Process the newsData and update the state or display it in the UI
          console.log('extracted data:', extractedData);
        } catch (error) {
          // Handle error cases
          console.error('Error getting news data:', error);
        }
      };
  return (
    <>
    <div>
    
  <h1>My Web App</h1>
   
   <Nav/>
   <Main/>
   <Footer/>

    </div>
    
    </>
  )
}

export default Home
