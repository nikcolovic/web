const articleContainer = $('.row');
$("#searchList").css("border", "none");

var request = $.ajax({
    url: 'https://api.tvmaze.com/shows'
});

request.done(function (allShowInfo) {
    for (var i = 0; i < 51; i++) {
        let showName = allShowInfo[i].name;
        let showIMG = allShowInfo[i].image.original;
        let showID = allShowInfo[i].id;

        let articleDiv = $('<div class="showDiv">');
        articleDiv.addClass('col-sm-12 col-md-6 col-lg-4 col-xl-4');

        let showImage = $(`<a href="#"><img src=${showIMG} data-show-id=${showID} class="mainPage-showImg"></a>`);
        showImage.css('display', 'inline-block')

        let showLink = $('<a class="showLink">' + showName + '</a>');
        showLink.attr('data-show-id', (showID));
        showLink.attr('href', '#');

        articleDiv.append(showImage);
        articleDiv.append(showLink);

        articleContainer.append(articleDiv);
    }

    let header = $(`<h1 class="col-12 mainTitle">Popular shows</h1>`);
    $(".row").prepend(header);
});

//switching to the single page from show name
$(document).on('click', '.showLink', function (event) {
    var usedLink = $(this).attr('data-show-id');
    localStorage.setItem('data-show-id', usedLink);

    window.location.href = 'single.html';
});

//switching to the single page from show image
$(document).on('click', '.mainPage-showImg', function (event) {
    var usedLink = $(this).attr('data-show-id');
    localStorage.setItem('data-show-id', usedLink);

    window.location.href = 'single.html';
});