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
        })
    };
    //renderOne function
    function renderOne(gamerStats) {
        //adding the card image to .mainone in html
        $('.mainone').html(`
        <span class="one"><img src=${gamerStats.cards[0].image}><img src=${gamerStats.cards[1].image}></span>
        `)
    }
    //blue deck on click function
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
    //added on click function on .promptbutton.
    $('.promptbutton').on('click', function(evt) {
        const prompNumber = parseInt(prompt('Enter Your Result'))
        if (prompNumber === 21) {
            alert('YOU WON!!! the probability of drawing 21 is 4.8%');
        } else if(prompNumber > 21) {
            alert('YOU WON!!! the probability of getting 2 aces is 0.6%, go buy a lottery NOW!!!')
        } else if(prompNumber < 21 && prompNumber >= 19) {
            alert('SO CLOSE!!!')
        } else {
            alert('Better Luck Next Time')
        }
})
})