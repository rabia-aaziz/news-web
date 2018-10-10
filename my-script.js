const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function initializer(){
// international-news
    $.ajax({
        //  tech-radar-api
          url: "https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

        success: function (data) {
            console.log(data);
            let articleContain1 = document.querySelector("#article-contain-1");
            for (let i = 5; i < data.articles.length; i++) {
                     console.log(i);
                const dateObj = new Date(data.articles[i].publishedAt);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear();
                articleContain1.innerHTML += `
                   <div class="img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div> 
                    <h5>${month} ${date}, ${year}</h5>
                 <h3 class="description-1">${data.articles[i].source.name}</h3>
                 <h3 class="description-1">${data.articles[i].content}</h3>
               <a class="readmore" href="${data.articles[i].url}">read more</a>
         `;
            }
        }
    });

    $.ajax({
         //  france-news-api
        url:"https://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

        success: function (data) {

            console.log(data);

            let articleContain2 = document.querySelector("#article-contain-2");
            for (let i = 8; i < data.articles.length; i++) {
                     console.log(i);
                const dateObj = new Date(data.articles[i].publishedAt);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear();
                articleContain2.innerHTML += `
                   <div class="img-2" style="background-image: url(${data.articles[i].urlToImage}) !important"></div> 
                    <h5>${month} ${date}, ${year}</h5>
                 <h3class="description-1">${data.articles[i].source.name}</h3>
                 <h3 class="description-2">${data.articles[i].content}</h3>
               <a class="readmore" href="${data.articles[i].url}">read more</a>
         `;
            }
        }
    });

    
    $.ajax({
        //  UK-news-api
       url:"https://newsapi.org/v2/top-headlines?sources=google-news-uk&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

       success: function (data) {

           console.log(data);

           let articleContain3 = document.querySelector("#article-contain-3");
           for (let i = 9; i < data.articles.length; i++) {
                    console.log(i);
               const dateObj = new Date(data.articles[i].publishedAt);
               const month = months[dateObj.getMonth()];
               const date = dateObj.getDate();
               const year = dateObj.getFullYear();
               articleContain3.innerHTML += `
                  <div class="img-3" style="background-image: url(${data.articles[i].urlToImage}) !important"></div> 
                   <h5>${month} ${date}, ${year}</h5>
                 <h3 class="description-1">${data.articles[i].source.name}</h3>
                <h3 class="description-2">${data.articles[i].content}</h3>
              <a class="readmore" href="${data.articles[i].url}">read more</a>
        `;
           }
       }
   });

//    DOMESTIC-NEWS
   $.ajax({
    //  ary-news-api
   url:"https://newsapi.org/v2/everything?sources=ary-news&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

   success: function (data) {

       console.log(data);

       let domesticContain1 = document.querySelector("#domestic-container-1");
       for (let i = 0; i < data.articles.length; i++) {
                console.log(i);
           const dateObj = new Date(data.articles[i].publishedAt);
           const month = months[dateObj.getMonth()];
           const date = dateObj.getDate();
           const year = dateObj.getFullYear();
           domesticContain1.innerHTML += `
           
           <div class="dom-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div> 
           <h5>${month} ${date}, ${year}</h5>
        <h3 class="dom-descrip-1">${data.articles[i].content}</h3>
      <a class="readmore" href="${data.articles[i].url}">read more</a>
    `;
       }
   }
});

$.ajax({
    //  ary-news-api
   url:"https://newsapi.org/v2/everything?sources=ary-news&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

   success: function (data) {

       console.log(data);

       let domesticContain1 = document.querySelector("#domestic-container-2");
       for (let i = 0; i < data.articles.length; i++) {
                console.log(i);
           const dateObj = new Date(data.articles[i].publishedAt);
           const month = months[dateObj.getMonth()];
           const date = dateObj.getDate();
           const year = dateObj.getFullYear();
           domesticContain1.innerHTML += `
           
           <div class="dom-img-2" style="background-image: url(${data.articles[i].urlToImage}) !important"></div> 
           <h5>${month} ${date}, ${year}</h5>
        <h3 class="dom-descrip-2">${data.articles[i].content}</h3>
      <a class="readmore" href="${data.articles[i].url}">read more</a>
    `;
       }
   }
});

$.ajax({
    //  ary-news-api
   url:"https://newsapi.org/v2/everything?sources=ary-news&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

   success: function (data) {

       console.log(data);

       let domesticContain1 = document.querySelector("#domestic-container-3");
       for (let i = 0; i < data.articles.length; i++) {
                console.log(i);
           const dateObj = new Date(data.articles[i].publishedAt);
           const month = months[dateObj.getMonth()];
           const date = dateObj.getDate();
           const year = dateObj.getFullYear();
           domesticContain1.innerHTML += `
           
           <div class="dom-img-3" style="background-image: url(${data.articles[i].urlToImage}) !important"></div> 
           <h5>${month} ${date}, ${year}</h5>
        <h3 class="dom-descrip-3">${data.articles[i].content}</h3>
      <a class="readmore" href="${data.articles[i].url}">read more</a>
    `;
       }
   }
});

// SPORTS
$.ajax({
    //  espn-sports-news-api
    url:"https://newsapi.org/v2/top-headlines?sources=espn&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

   success: function (data) {

       console.log(data);

       let sportsContain1 = document.querySelector(".sports-container");
       for (let i = 4; i < data.articles.length; i++) {
                console.log(i);
           const dateObj = new Date(data.articles[i].publishedAt);
           const month = months[dateObj.getMonth()];
           const date = dateObj.getDate();
           const year = dateObj.getFullYear();
           sportsContain1.innerHTML += `
           <section class="sports-section">
           <div class="row ">
                <div class="col-md-4 sport-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
           <div class="col-md-4 offset-md-4 sport-desc-1" >${data.articles[i].content}</div>
            </div>              
           </section>`;            
     }
   }
});
// TECH-NEWS
$.ajax({
     // tech-runch-api
     url:"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",
  
   success: function (data) {

       console.log(data);

       let techContain1 = document.querySelector("#tech-news-1");
       for (let i = 9; i < data.articles.length; i++) {
                console.log(i);
           const dateObj = new Date(data.articles[i].publishedAt);
           const month = months[dateObj.getMonth()];
           const date = dateObj.getDate();
           const year = dateObj.getFullYear();
           techContain1.innerHTML += `

           <div class="tech-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
           <h5>${month} ${date}, ${year}</h5>
           <h3 class="tech-title-1">${data.articles[i].title}</h3>
           <p class="tech-desc-1">${data.articles[i].content}</p>   
          <a class="readmore" href="${data.articles[i].url}">read more</a>      

    `;
       }
   }
});
$.ajax({
    //  tech-radar-api
    url: "https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",
 
  success: function (data) {

      console.log(data);

      let techContain2 = document.querySelector("#tech-news-2");
      for (let i = 5; i < data.articles.length; i++) {
               console.log(i);
          const dateObj = new Date(data.articles[i].publishedAt);
          const month = months[dateObj.getMonth()];
          const date = dateObj.getDate();
          const year = dateObj.getFullYear();
          techContain2.innerHTML += `

          <div class="tech-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
          <h5>${month} ${date}, ${year}</h5>
          <h3 class="tech-title-1">${data.articles[i].title}</h3>
          <p class="tech-desc-1">${data.articles[i].content}</p>     
          <a class="readmore" href="${data.articles[i].url}">read more</a>      

   `;
      }
  }
});
$.ajax({
    //  Crypto Coins News API
    url:"https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",
   success: function (data) {
      console.log(data);
      let techContain3 = document.querySelector("#tech-news-3");
      for (let i = 19; i < data.articles.length; i++) {
               console.log(i);
          const dateObj = new Date(data.articles[i].publishedAt);
          const month = months[dateObj.getMonth()];
          const date = dateObj.getDate();
          const year = dateObj.getFullYear();
          techContain3.innerHTML += `
          <div class="tech-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
          <h5>${month} ${date}, ${year}</h5>
          <h3 class="tech-title-1">${data.articles[i].title}</h3>
          <p class="tech-desc-1">${data.articles[i].content}</p>  
          <a class="readmore" href="${data.articles[i].url}">read more</a>`;     
    }
  }
});
$.ajax({
    // Gruenderszene API
    url:"https://newsapi.org/v2/top-headlines?sources=gruenderszene&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",
  success: function (data) {
      console.log(data);
      let techContain4 = document.querySelector("#tech-news-4");
      for (let i = 9; i < data.articles.length; i++) {
               console.log(i);
          const dateObj = new Date(data.articles[i].publishedAt);
          const month = months[dateObj.getMonth()];
          const date = dateObj.getDate();
          const year = dateObj.getFullYear();
          techContain4.innerHTML += `
          <div class="tech-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
          <h5>${month} ${date}, ${year}</h5>
          <h3 class="tech-title-1">${data.articles[i].title}</h3>
          <p class="tech-desc-1">${data.articles[i].content}</p>  
          <a class="readmore" href="${data.articles[i].url}">read more</a>`;    
    }
  }
});
// BUSINESS NEWS
$.ajax({
    // Gruenderszene API
    url:"https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",
   success: function (data) {
      console.log(data);
      let bContain1 = document.querySelector(".b-container-1");
      for (let i =7; i < data.articles.length; i++) {
               console.log(i);
          const dateObj = new Date(data.articles[i].publishedAt);
          const month = months[dateObj.getMonth()];
          const date = dateObj.getDate();
          const year = dateObj.getFullYear();
          bContain1.innerHTML += ` 
          <div class="busi-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
          <h3 class="busi-title-1">${data.articles[i].title}</h3>
          <p class="busi-descr-1">${data.articles[i].content}</p>
           <p class="single_cat_right_content_meta"><a href="${data.articles[i].url}"><span>read more</span></a> 3 hours ago</p>  
            <p>---------------------------------    </p>
           `;
      }
  }
});
// HEALTH-NEWS
$.ajax({
    // Gruenderszene API
    url:"https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",
   success: function (data) {
      console.log(data);
      let healthContain1 = document.querySelector(".health-cont-1");
      for (let i =7; i < data.articles.length; i++) {
          console.log(i);
          const dateObj = new Date(data.articles[i].publishedAt);
          const month = months[dateObj.getMonth()];
          const date = dateObj.getDate();
          const year = dateObj.getFullYear();
          healthContain1.innerHTML += ` 
          <div class="health-img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
              <h3 class="health-title-1">${data.articles[i].title}</h3>
              <p class="single_cat_right_content_meta"><a href="${data.articles[i].url}">read more</p>`;
      }
  }
});
    $.ajax({
        //  LIFE-STYLE
        url: "https://newsapi.org/v2/everything?sources=ary-news&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",
        success: function (data) {
            console.log(data);
            let articleContain5 = document.querySelector("#article-contain-5");
            for (let i = 8; i < data.articles.length; i++) {
                     console.log(i);
                const dateObj = new Date(data.articles[i].publishedAt);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear();
                articleContain5.innerHTML += `
        <div class="popular">
        <div id="img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
            <ul>
              <li>
                <div class="single_popular">
                  <p>${month} ${date}, ${year}</p>
                  <h3>${data.articles[i].title}</h3>
                </div>
              </li>
            </ul>
            <a href="${data.articles[i].url}"  class="popular_more">more</a> </div> `;
            }
        }
    });
}