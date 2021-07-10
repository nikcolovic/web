$("#searchList").css("border", "none");

const getSingleShow = (() => {
    let showID = localStorage.getItem("data-show-id");

    request = $.ajax({
    url: 'https://api.tvmaze.com/shows/' + showID,
    data: {
        embed: ['seasons', 'cast']
    }
});

request.done(function (singleShow) {
    // h1
    let showTitle = singleShow.name;
    let header = $(`<h1 class="col-12 singleShowTitle"> ${showTitle} </h1>`);
    $('.row').prepend(header);

    // pic
    if (singleShow.image === null) {
        showPic = 'https://via.placeholder.com/350x500?text=No+Image+Available';
    } else {
        showPic = singleShow.image.original;
    }
    
    // number of seasons
    let numOfSeasons = singleShow._embedded.seasons.length;

    // summary
    let summary = singleShow.summary;

    //list of seasons beginning and end dates

    let seasonsDates = '';
    let showCast = '';

    for (let i = 0; i < singleShow._embedded.seasons.length; i++) {
        if (singleShow._embedded.seasons[i].premiereDate === null || singleShow._embedded.seasons[i].endDate === null) {
            seasonsDates += "<li>Unknown</li>"
        } else {
            seasonsDates += `<li>${singleShow._embedded.seasons[i].premiereDate}
                            -${singleShow._embedded.seasons[i].endDate}</li>`;
        }
    }

    for (let i = 0; i < singleShow._embedded.cast.length; i++) {
        if (i === 10) {
            break;
        }
        showCast += `<li>${singleShow._embedded.cast[i].person.name}</li>`
    }

    // adding showPic, number of seasons and summary to bootstrap div
    let bootstrapDiv = `<div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 singleShowImgDiv"><img src='`
                                + showPic +
                                `' class="singleShowImg" ></div>
                            <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6"><h2 class="titleStyle">Seasons (`
                                    + numOfSeasons +
                                `)</h2>
                                <ol>`
                                    + seasonsDates +
                                `</ol>
                            <h2 class="titleStyle">Cast</h2>
                                <ul>`
                                    + showCast +
                                `</ul>
                            </div>
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 showDescription">` + summary + `</div>`;

    $('.row').append(bootstrapDiv);
})

localStorage.removeItem("data-show-id")
});

getSingleShow();