$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#textarea').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {

    axios.get('http://www.omdbapi.com/?s=' + searchText + '&apikey=b7e7208a')
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                <div class="col-md-3 mb-3">
                <div class="card">
                <div class="card-body text-center">
                <img class="img-fluid" src="${movie.Poster}">
                <h5 class="card-title">${movie.Title}</h5>
                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                
                </div>
                </div>
                </div>

                
                `;
            })

            $('#movies').html(output);
        })
        .catch((err) => {
            console.log(err);
        });
}


function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}

function getMovie() {
    let movieId = sessionStorage.getItem('movieId');

    axios.get('http://www.omdbapi.com/?i=' + movieId + '&apikey=b7e7208a')
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
                    <div class="col-12">
                    <div class="card p-3">
                    <a href="http://www.imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="moviesearch.html" class="btn btn-dark">Go Back</a>
                    <div class="card-body text-center">
                    <img class="img-fluid" src="${movie.Poster}">
                    

                    <div class="col-12 text-center">
                    <h2 class="card-title">${movie.Title}</h2>
                    <ul class="list-group ">
                    <li class="list-group-item"><strong>Genre:</strong>${movie.Genre}</li>
                    <li class="list-group-item"><strong>Released:</strong>${movie.Released}</li>
                    <li class="list-group-item"><strong>Rated:</strong>${movie.Rated}</li>
                    <li class="list-group-item"><strong>IMDB Rating:</strong>${movie.imdbRating}</li>
                    <li class="list-group-item"><strong>Director:</strong>${movie.Director}</li>
                    <li class="list-group-item"><strong>Writer:</strong>${movie.Writer}</li>
                    <li class="list-group-item"><strong>Actors:</strong>${movie.Actors}</li>
                    </ul>
                    </div>
                    </div>
                    <div class="col-md text-center">
                    <h3>Plot</h3>
                    ${movie.Plot}
                    <hr>
                    
                    </div>
                    </div>
                   
                    </div>

                  
    
                    
                    `;


            $('#movie').html(output);
        })
        .catch((err) => {
            console.log(err);
        })
}