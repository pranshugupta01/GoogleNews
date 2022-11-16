import logo from "./logo.svg";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react";

const axios = require('axios').default;

// Make a request for a user with a given ID

function GoogleNews() {
  let [value, setValue] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=a268451f984343aca5e6f2d33a60e747')
  .then(response => response.json())
  .then(json => setValue(json.articles))
  },[])


    return (
       <div>
        
        { value.map((article, i) => (
            <div key={i} className="row gx-5">
   <div className="col-md-6 mb-4">
     <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
       <img src={article.urlToImage} className="img-fluid" />
       <a href={article.url}>
         <div className="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
       </a>
     </div>
   </div>

   <div className="col-md-6 mb-4">
     <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">Top Headlines</span>
     <h4><strong>{article.title}</strong></h4>
     <p className="text-muted">
     {article.description}
     </p>
     <button type="button" className="btn btn-primary">Read more</button>
   </div>
 </div>
          )
        ) }
       </div>
    );



//   return ( <div class="row gx-5">
//   <div class="col-md-6 mb-4">
//     <div class="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
//       <img src={article.urlToImage} class="img-fluid" />
//       <a href={article.url}>
//         <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
//       </a>
//     </div>
//   </div>

//   <div class="col-md-6 mb-4">
//     <span class="badge bg-danger px-2 py-1 shadow-1-strong mb-3">Top Headlines</span>
//     <h4><strong>{article.title}</strong></h4>
//     <p class="text-muted">
//     {article.description}
//     </p>
//     <button type="button" class="btn btn-primary">Read more</button>
//   </div>
// </div>);

}

export default GoogleNews;
