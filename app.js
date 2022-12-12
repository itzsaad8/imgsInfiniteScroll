const imgCont=document.getElementById('img-cont');
const loader=document.getElementById('loader');

let photosArray=[];


const count=100;
const apiKey='3PnSsgfFmTAnC6vPoF392RrnaHzHhfCfw8wJI7g2ZTY';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


function displayPhotos() {
  
    photosArray.forEach((photo) =>{
       
        const items = document.createElement('a');
        items.setAttribute('href', photo.links.html);
        items.setAttribute('target', '_blank');
        const image= document.createElement('img');
        image.setAttribute('src', photo.urls.regular);
        image.setAttribute('alt', photo.alt_description);
        image.setAttribute('title', photo.alt_description);

        items.appendChild(image);
        imgCont.appendChild(items);
    });
}




async function getPhotos(){
    try{
        const responce = await fetch(apiUrl);
        photosArray= await responce.json();
        displayPhotos();

    }
    catch (error){

    }

}
getPhotos();