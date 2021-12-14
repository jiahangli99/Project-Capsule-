$(function () {
    //Created two variables
    const deckUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
    const $form = $('form');
    //alerts the first player to press the button
    alert('Player 1 Please Draw 2 Cards');
// red deck on click function
    $form.on('click', '.buttonred', handleGetDataOne);
    function handleGetDataOne(a) {
        //prevent default so it doesnt reload the page on click
        a.preventDefault()
        //loads the website then runs the function renderOne
        $.ajax(deckUrl).then(function (dataOne) {
            renderOne(dataOne)
            alert('Player 2 Please Draw 2 Cards');
        })
    };
    function renderOne(gamerStats) {
        $('.mainone').html(`
        <span class="one"><img src=${gamerStats.cards[0].image}><img src=${gamerStats.cards[1].image}></span>
        `)
    }
    $form.on('click', '.buttonblue', handleGetDataTwo);
    function handleGetDataTwo(a) {
        a.preventDefault()
        $.ajax(deckUrl).then(function (dataTwo) {
            renderTwo(dataTwo)
        })
    }
    function renderTwo(gamerStats) {
        $('.maintwo').html(`
    <span class="two"><img src=${gamerStats.cards[0].image}><img src=${gamerStats.cards[1].image}></span>
    `)
    }






})