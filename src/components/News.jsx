// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinnner from "./Spinnner";
// import PropTypes from "prop-types";
// // import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [article, setArticle] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const captalizefirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   let updateNews = async () => {
//     props.setProgress(10);
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedata = await data.json();
//     props.setProgress(70);

//     setArticle(parsedata.articles);
//     setTotalResults(parsedata.totalResults);
//     setLoading(false);
//     props.setProgress(100);
//   };
//   useEffect(() => {
//     document.title = `${captalizefirstLetter(props.category)} - Daily Samachar`;
//     updateNews();
//   }, []);

//   const handleNextclick = async () => {
//     setPage(page + 1);
//     updateNews();
//   };

//   const handlePrevclick = async () => {
//     setPage(page - 1);
//     updateNews();
//   };
//   // const fetchMoreData = async () => {
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${
//   //     props.country
//   //   }&category=${props.category}&apiKey=${props.apikey}&page=${
//   //     page + 1
//   //   }&pageSize=${props.pageSize}`;
//   //   setPage(page + 1);

//   //   let data = await fetch(url);
//   //   let parsedata = await data.json();
//   //   setArticle(article.concat(parsedata.articles));
//   //   console.log(article.length);
//   //   setTotalResults(parsedata.totalResults);
//   // };
//   return (
//     <>
//       <h1
//         className="text-center"
//         style={{
//           margin: "35px 0px",
//           marginTop: "90px",
//           fontWeight: "bold",
//           textTransform: "uppercase",
//           fontSize: "2.5rem",
//           fontFamily: "Roboto, sans-serif",
//           textShadow: "1px 2px 3px rgba(0, 0, 0, 0.5)",
//           textAlign: "center",
//           padding: "10px",

//           borderRadius: "10px",
//         }}
//       >
//         Daily Samachar - Top {captalizefirstLetter(props.category)} Headlines
//       </h1>

//       {loading && <Spinnner />}

//       {/* <InfiniteScroll
//         dataLength={article.length}
//         next={fetchMoreData}
//         hasMore={article.length !== totalResults}
//         loader={<Spinnner />}
//       > */}
//       <div className="container">
//         <div className="row">
//           {article.map((element) => {
//             return (
//               <div className="col-md-4" key={element.url}>
//                 <NewsItem
//                   title={element.title ? element.title : ""}
//                   description={element.description ? element.description : ""}
//                   imgurl={element.urlToImage}
//                   newsurl={element.url}
//                   author={element.author}
//                   date={element.publishedAt}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="container d-flex justify-content-between">
//         <button
//           disabled={page <= 1}
//           className="btn btn-dark"
//           onClick={handlePrevclick}
//         >
//           &larr; Previous
//         </button>
//         <button
//           id="next"
//           disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
//           className="btn btn-dark"
//           onClick={handleNextclick}
//         >
//           Next &rarr;
//         </button>
//       </div>
//       {/* </InfiniteScroll> */}
//     </>
//   );
// };
// News.defaultProps = {
//   country: "in",
//   pageSize: 6,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   category: PropTypes.string,
//   pageSize: PropTypes.number,
// };

// export default News;


import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinnner from "./Spinnner";
import PropTypes from "prop-types";
import { CountryContext } from "../context/countrycontext";
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const { country , search} = useContext(CountryContext);
  const captalizefirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let updateNews = async () => {
    props.setProgress(10);    
    let url;

    if(search === ""){
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    }else{    
     url = `https://newsapi.org/v2/top-headlines?&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}&q=${search}`;
    }
     setLoading(true);
    console.log(country)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedata = await data.json();
    props.setProgress(70);

    setArticle(parsedata.articles);
    setTotalResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    
    console.log(search);
    document.title = `${captalizefirstLetter(props.category)} - Daily Samachar`;
    updateNews();
  }, [
    country,
    props.category,
    props.apikey,
    props.pageSize,
    props.setProgress,
    search,
  ]);

  const handleNextclick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const handlePrevclick = async () => {
    setPage(page - 1);
    updateNews();
  };

  return (
    <>
      <h1
        className="text-center 
        "
        style={{
          margin: "35px 0px",
          marginTop: "140px",
          fontWeight: "bold",
          textTransform: "uppercase",          
          fontFamily: "Roboto, sans-serif",
          textShadow: "1px 2px 3px rgba(0, 0, 0, 0.5)",
          textAlign: "center",
          padding: "10px",
          borderRadius: "10px",
          
        }}        
      >
        Daily Samachar - Top {captalizefirstLetter(props.category)} Headlines
      </h1>

      {loading && <Spinnner />}

      <div className="container">
        <div className="row">
          {!loading && article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between p-3">
        <button
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={handlePrevclick}
        >
          &larr; Previous
        </button>
        <button
          id="next"
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className="btn btn-dark"
          onClick={handleNextclick}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;

