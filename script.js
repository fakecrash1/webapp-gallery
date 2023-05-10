var thumbnails = document.getElementsByClassName("thumbnail")

for(i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = "thumbnail-" + i;
}

let imagesData = [
    {
        photo: "images/AdobeStock_01.jpeg",
        title: "My title 1",
        description: "What happened here, why is this a very nice image 1"
    },
    {
        photo: "images/AdobeStock_02.jpeg",
        title: "My title 2",
        description: "What happened here, why is this a very nice image 2"
    },
    {
        photo: "images/AdobeStock_03.jpeg",
        title: "My title 3",
        description: "What happened here, why is this a very nice image 3"
    },
    {
        photo: "images/AdobeStock_04.jpeg",
        title: "My title 4",
        description: "What happened here, why is this a very nice image 4"
    },
    {
        photo: "images/AdobeStock_05.jpeg",
        title: "My title 5",
        description: "What happened here, why is this a very nice image 5"
    },
    {
        photo: "images/AdobeStock_06.jpeg",
        title: "My title 6",
        description: "What happened here, why is this a very nice image 6"
    },
    {
        photo: "images/AdobeStock_07.jpeg",
        title: "My title 7",
        description: "What happened here, why is this a very nice image 7"
    },
    {
        photo: "images/AdobeStock_08.jpeg",
        title: "My title 8",
        description: "What happened here, why is this a very nice image 8"
    }
];

$('#photo').attr('src', data.photo);