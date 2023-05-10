var thumbnails = document.getElementsByClassName("thumbnail")

for(i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = "thumbnail-" + i;
}

