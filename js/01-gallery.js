import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCollec = document.querySelector(".gallery");
const galleryLink = document.querySelector(".gallery__link");
const galleryImage = document.querySelector(".gallery__image")
const itemList = creatGalleryItem(galleryItems); 
galleryCollec.insertAdjacentHTML("beforeend", itemList);
galleryCollec.addEventListener("click", onGalleryCollecClick);



function creatGalleryItem(galleryItems){
    return galleryItems.map(({preview, description, original}) => {
        return`
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;}).join("");}



function onGalleryCollecClick(evt){
    evt.preventDefault();
    const galleryTargetEl = evt.target.classList.value;
    if(galleryTargetEl !== "gallery__image"){
        return;
    }
   const newGalleryImage = evt.target.attributes["data-source"].value;    
   const instance = basicLightbox.create(`<img src="${newGalleryImage}"
      />`)
instance.show();

galleryCollec.addEventListener("keydown", onKeyClose);
function onKeyClose(evt){
const ESC_KEY_CODE = `Escape`
if (evt.code === ESC_KEY_CODE){
  instance.close();
}
}
}





   





