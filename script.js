const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const card = document.querySelector(".card");
const main = document.querySelector(".main");
const input = document.querySelector("input")
async function getdata(api) {
  let response = await fetch(api);
  let data = await response.json();
  showmovies(data.results);
}

const showmovies = (data) => {
  data.forEach((item) => {
    console.log(item);
    let image = IMGPATH + item.poster_path;
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` <img src="${image}" alt="" />
            <div class="overview">
            <div class="title">
              <h2>${item.original_title}</h2>
              <span>${item.vote_average.toFixed(1)}</span>
            </div>
            <div class="desc">
             ${item.overview}
            </div>
          </div>
        </div>`;
    main.appendChild(card);
  });
};

const searchmovie = (e)=>{
    main.innerHTML= ""
    getdata(SEARCHAPI+e.target.value)
}
input.addEventListener("keyup",searchmovie)
getdata(APIURL);
