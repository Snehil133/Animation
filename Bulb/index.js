

function light(show){
    let pic;
    if(show == 0){
        pic = "download.jpg";
    }
    else{
        pic = "download (1).jpg"
    }
    document.getElementById("bulb").src = pic
}