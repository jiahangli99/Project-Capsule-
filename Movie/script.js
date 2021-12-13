// how to request data from an API using JavaScript

// There are several ways to do this 
/**
 * 1) jQuery's $.ajax()
 * 2) The browser's fetch()
 * 3) Using the axios http client library
 */
$(function () {

    const URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=6dea1217&t=';

    const $form = $('form');
    const $input = $('input[type="text"]');

    $form.on('submit', handleGetData);


    function handleGetData(evt) {
        evt.preventDefault();
        const userInput = $input.val()
        if (!userInput) return;
        $input.val('');
        $.ajax(URL + userInput).then(function (data) {
            console.log('movie data is ready!')
            render(data);
        }, function (error) {
            console.log('something went wrong')
            console.log(error);
        })
    }
    function render(movieData) {
        $('main').html(`
        <h3>Title: ${movieData.Title}</h3>
        <h3>Year: ${movieData.Year}</h3>
        <h3>Rating: ${movieData.Rated}</h3>
        <img src="${movieData.Poster}" alt="${movieData.Title}">
    `);
    }
})