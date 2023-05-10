var thumbnails = document.getElementsByClassName("thumbnail")

for(i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = "thumbnail-" + i;
}

let data = {
    photo: 'images/AdobeStock_01.jpeg',
    title: 'My title',
    description: 'What happened here, why is this a very nice image'
};

$('#photo').attr('src', data.photo);