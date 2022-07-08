$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#textarea').val();
        let key = 'd860e98598b84b62a5b183425222906';
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    console.log(searchText);
    axios.get('http://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + searchText)
        .then((response) => {
            console.log(response);
        })


        .catch((err) => {
            console.log(err);
        });
}
