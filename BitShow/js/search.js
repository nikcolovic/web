// handling enter click
$(document).on("keydown", ".searchLine", function(event) {
	if (event.key === "Enter") {
		$(".row").text('');
		searchShows();
		$(".searchLine").val('');
		$("#searchList").remove();
	}
});

//search results
function searchShows() {
	let enteredText = $(".searchLine").val();

	var request = $.ajax({
		url: "https://api.tvmaze.com/search/shows?q=" + enteredText
	});

	request.done(function(gotResult) {
		$(".row").text("");

		if (gotResult.length === 0) {
			let noResultsErrorText = $(
				'<p class="noResultsErrorText">No results matching your query</p>'
			);
			$(".row").append(noResultsErrorText);
			return;
		} else if (gotResult.length === 1) {
			$(".row").text("");
			let showID = gotResult[0].show.id;
			localStorage.setItem('data-show-id', showID);
			getSingleShow();
			return;
		}

		for (var i = 0; i < gotResult.length; i++) {
			let showName = gotResult[i].show.name;
			let showID = gotResult[i].show.id;
			let showIMG;

			if (gotResult[i].show.image === null) {
				showIMG = "https://via.placeholder.com/350x500?text=No+Image+Available";
			} else {
				showIMG = gotResult[i].show.image.original;
			}

			let articleDiv = $('<div class="showDiv">');
			articleDiv.addClass("col-sm-12 col-md-6 col-lg-4 col-xl-4");

			articleDiv.append(`<a href="#"><img src=${showIMG} data-show-id=${showID} class="mainPage-showImg"></a>
								<a class="showLink" data-show-id=${showID} href="#">${showName}</a>`);

			$(".row").append(articleDiv);
		}

		let header = $('<h1 class="col-12 mainTitle">Your Results</h1>');
		$(".row").prepend(header);
	});
}

//search dropdown list
$(".searchLine").keyup(function() {
	const enteredText = $(".searchLine").val();

	var request = $.ajax({
		url: "https://api.tvmaze.com/search/shows?q=" + enteredText
	});

	request.done(function(gotResult) {
		$("#searchList").text('');

		for (let i = 0; i <= 10; i++) {
			if(gotResult[i] !== undefined) {
				let searchListItem = $("<li>");
				searchListItem.append(gotResult[i].show.name);
				searchListItem.attr("data-show-id", gotResult[i].show.id);
				$("#searchList").append(searchListItem);
			}
		}

		$("li").on("click", function() {
			const usedLink = $(this).attr("data-show-id");
			localStorage.setItem("data-show-id", usedLink);
			
			window.location.href = "single.html";
		});
		});
});

//switching to the single page from show name
$(document).on('click', '.showLink', function (event) {
    const usedLink = $(this).attr('data-show-id');
    localStorage.setItem('data-show-id', usedLink);

	window.location.href = 'single.html';
});

//switching to the single page from show image
$(document).on('click', '.mainPage-showImg', function (event) {
    const usedLink = $(this).attr('data-show-id');
    localStorage.setItem('data-show-id', usedLink);

	window.location.href = 'single.html';
});
