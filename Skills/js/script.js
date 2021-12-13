$('ul').on("click", "button", function () {
    $(this).closest('li').remove();
    console.log('test');
});

$('#add').on('click', function(evt) {
    const newText = $('#input').val()
$('ul').append(`<li class="newli"><br><br><button class="newbutton">X</button>GREAT JOB YOU LEARNED: ${newText}</li>`)
})