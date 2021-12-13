$(function () {
    const deckUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2';
    const $form = $('form');
    alert('Player 1 Please Draw 2 Cards');

    $form.on('click', '.buttonred', handleGetDataOne);
    function handleGetDataOne(a) {
        a.preventDefault()
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






})