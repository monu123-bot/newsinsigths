
import axios from 'axios';
// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('2f025549e258407a81b1af270d53c182');

export const fetchNewsData = async (query,page,startDate,endDate) => {
  console.log('query with page',page,startDate,endDate)
  
  // try {
  //   newsapi.v2.everything({
  //     q: 'bitcoin',
  //     sources: 'bbc-news,the-verge',
  //     domains: 'bbc.co.uk, techcrunch.com',
  //     from: '2017-12-01',
  //     to: '2017-12-12',
  //     language: 'en',
  //     sortBy: 'relevancy',
  //     page: 2
  //   }).then(response => {
  //     console.log(response);
  //     /*
  //       {
  //         status: "ok",
  //         articles: [...]
  //       }
  //     */
  //   });
  // } catch (error) {
  //   console.log(error)
  //   return null
  // }

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&from=${startDate}&to=${endDate}&apiKey=2f025549e258407a81b1af270d53c182&page=${page}`
      );
  
      // Process the API response and return the data
      // console.log(response.data)
      return response;
    } catch (error) {
      // Handle error cases
      console.error('Error fetching news data:', error);
      return null;
    }
  };