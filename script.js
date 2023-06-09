//Making an array for images with: src, title, description
let imagesData = [
    {
        photo: "images/AdobeStock_01.jpeg",
        title: "Almost",
        description: "After the picture i fellt into the water"
    },
    {
        photo: "images/AdobeStock_02.jpeg",
        title: "DJ",
        description: "Coding is like party all day isn't it?"
    },
    {
        photo: "images/AdobeStock_03.jpeg",
        title: "Seeds",
        description: "Every line written is like a seed planted"
    },
    {
        photo: "images/AdobeStock_04.jpeg",
        title: "Some rest",
        description: "Sometime everyone needs a vacation"
    },
    {
        photo: "images/AdobeStock_05.jpeg",
        title: "Long road",
        description: "Coding seems to be a long journey.."
    },
    {
        photo: "images/AdobeStock_06.jpeg",
        title: "Nature",
        description: "There is always a way"
    },
    {
        photo: "images/AdobeStock_07.jpeg",
        title: "Yoga",
        description: "Recharge yourself is important"
    },
    {
        photo: "images/AdobeStock_08.jpeg",
        title: "Keep research",
        description: "Keep research to be as up to date as possible"
    }
];

//photo *_01 as "0" -> Loading first image as main image
let currentPhoto = 0;

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);

    // Remove the thumbnail-frame class from all thumbnails
    $('.thumbnail').removeClass('thumbnail-frame');
    // Add the thumbnail-frame class to the active thumbnail
    $(`.thumbnail[data-number=${photoNumber}]`).addClass('thumbnail-frame');
}


loadPhoto(currentPhoto);

//Button functions
$('#right-arrow').click(() => {
    currentPhoto++;
    if (currentPhoto >= imagesData.length) {
    currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
    currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
});

//Create thumbnails with [.forEach] method
function createThumbnails() {
    imagesData.forEach((imageData, index) => {
        const thumbnail = $('<img>', {
            class: 'thumbnail',
            src: imageData.photo,
            alt: `Thumbnail ${index + 1}`,
            'data-number': index
        });

        // Add the thumbnail-frame class to the first thumbnail
        if (index === 0) {
            thumbnail.addClass('thumbnail-frame');
        }

        const thumbnailInfo = $('<div>', {
            class: 'thumbnail-info',
            text: `${imageData.title}: ${imageData.description}`,
            css: {
                position: 'absolute',
                display: 'none'
            }
        });

        thumbnail.on('click', function () {
            const thumbnailNumber = $(this).attr('data-number');
            currentPhoto = parseInt(thumbnailNumber);
            loadPhoto(currentPhoto);
        });

        thumbnail.on('mousemove', (event) => {
            thumbnailInfo.css({
                display: 'block',
                top: event.pageY - 40, 
                left: event.pageX - thumbnailInfo.width() / 2 
            });
        });

        thumbnail.on('mouseout', () => {
            thumbnailInfo.css('display', 'none');
        });

        $('.thumbnails-container').append(thumbnail);
        $('.thumbnails-container').append(thumbnailInfo);
    });
}

createThumbnails();
