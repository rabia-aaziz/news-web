const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function initializer(){
// international-news
    $.ajax({
        //  business-insider-api/
        url:"https://newsapi.org/v2/top-headlines?sources=business-insider&apiKey=7b8fe4ba9893416aa5aaf765e512d1f9",

        success: function (data) {
            console.log(data);
            let articleContain1 = document.querySelector(".cards-container");
            for (let i = 0; i < data.articles.length; i++) {
                     console.log(i);
                const dateObj = new Date(data.articles[i].publishedAt);
                const month = months[dateObj.getMonth()];
                const date = dateObj.getDate();
                const year = dateObj.getFullYear();
                articleContain1.innerHTML += `
                <div class="card-deck news-card-1">
                <div class="card">
                <div class="card-img-top news-img" style="background-image: url(${data.articles[i].urlToImage}) !important"></div>
                  <div class="card-body news-content-1">
                    <h5 class="card-title">${data.articles[i].source.name}</h5>
                    <p class="card-text">${data.articles[i].content}.</p>
                  <h5>${month} ${date}, ${year}</h5>

                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                 </div>
               </div>
              </div>

         `;
            }
        }
    });
    
}

            //        <div class="img-1" style="background-image: url(${data.articles[i].urlToImage}) !important"></div> 
            //         <h5>${month} ${date}, ${year}</h5>
            //      <h3 class="description-1">${data.articles[i].source.name}</h3>

            //      <h3 class="description-1">${data.articles[i].content}</h3>
            //    <a class="readmore" href="${data.articles[i].url}">read more</a>