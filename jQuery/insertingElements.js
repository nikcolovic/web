/*var srcArray = [
    "/WEB/CSS/images/BanjskaStena.jpg",
"/WEB/CSS/images/DunavPanorama.jpg",
"/WEB/CSS/images/OKK.jpg",
"/WEB/CSS/images/NSpetrovaradin.jpg"
];

$(document).ready(function() {
    createGallery();
    createTitle();
    randomWidth();
    addBorder();                                   
})

function createGallery() {
    var body = $("body")
    srcArray.forEach(function(src){
        var img = $("<img>");
        img.attr("src", src);
        body.append(img);
    })
}

function createTitle() {
    var body = $("body");
    var title = $(<h1>Amazing Gallerry</h1>)
}

function randomWidth () {
    var allImgs = $("img");
    allImgs.each(function(node) {
        var randomWidth = Math.floor(Math.random() * (300 - 100 +1)) +100;
        $(this).width(randomWidth);
    })
}

function addBorder() {
    var allImgs = $("img");
    allImgs.each(function(node) {
        if ($(this).width() < 200) {
            $(this).addClass("border")
        } else {
            return false;
        }
    });
}
    
*/
    
  
    
    
    
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    
        var ArrayOfImages = [];

        var Image1 = new Image1()
        Image1.src = "http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg";

        var Image2 = new Image2()
        Image2.src = "http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg";

        var Image3 = new Image3()
        Image3.src = "http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg";

        var Image4 = new Image4()
        Image4.src = "http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg";

        var Image5 = new Image5()
        Image5.src = "http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg";

        var Image6 = new Image6()
        Image6.src = "http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg";

        var Image7 = new Image7()
        Image7.src = "http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg";

        ArrayOfImages.push(Image1);
        ArrayOfImages.push(Image2);
        ArrayOfImages.push(Image3);
        ArrayOfImages.push(Image4);
        ArrayOfImages.push(Image5);
        ArrayOfImages.push(Image6);
        ArrayOfImages.push(Image7);
       //ArrayOfImages.toString();
        document.write(ArrayOfImages);

        var randomNumb = function () {
            return Math.floor(200 + Math.random() * 300);
          };
      
          setInterval(
            $("a").each(function (index, element) {
              var ran = randomNumb();
              $(element).css("width", ran + "px");
            }),
            1000
          );var randomNumb = function () {
            return Math.floor(200 + Math.random() * 300);
          };
      
          setInterval(
            $("a").each(function (index, element) {
              var ran = randomNumb();
              $(element).css("width", ran + "px");
            }),
            1000
          );
        });
        var body = $('body');
        var arrImg=[];
        var img_1 = "BanjskaStena.jpg";
        var img_2 = "DunavPanorama.jpg";
        var img_3 = "OKK.jpg";
        arrImg.push(img_1);
        arrImg.push(img_2);
        arrImg.push(img_3);
        for (var i = 0; i < arrImg.length; i++) {
            var aTag = $('<a>');
            aTag.addClass('image-popup-fit-width')
            var img = $('<img>');
            aTag.attr('href', arrImg[i]);
            img.attr('src', arrImg[i]);
            aTag.append(img);
            $('body').append(aTag);
        }
        $(document).ready(function() {
            $('.image-popup-vertical-fit').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }
            });
            $('.image-popup-fit-width').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: false
                }
            });
            $('.image-popup-no-margins').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
            var galerryTitle = '<h1>Najlepši vidikovci Srbije</h1>';
            $('body').prepend(galerryTitle);


            //adding random widths to images:
            var randomArray = [];
            for(var i=0; i<3; i++) {
                randomArray.push(parseInt(Math.random() *1000) + 'px');
            }
            var images = $('img');
            for(var i=0; i<6; i++) {
                $(images[i]).attr("width", randomArray[i]);
            };


            //Bonus:
            $(images).each(function(image) {
                // console.log(this.width);
                if ($(this).width() < 500) {
                    this.style.border = 'green 5px solid';
                } else {
                    this.style.border = 'none';
                    return false;
                }
            })

        });
        
        