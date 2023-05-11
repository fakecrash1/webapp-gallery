var thumbnails = document.getElementsByClassName("thumbnail")

for(i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = "thumbnail-" + i;
}

$(document).ready(function () {
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

    let currentPhoto = 0;

    function loadPhoto(photoNumber) {
        $('#photo').attr('src', imagesData[photoNumber].photo);
        $('#photo-title').text(imagesData[photoNumber].title);
        $('#photo-description').text(imagesData[photoNumber].description);
    }

    loadPhoto(currentPhoto);

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
});