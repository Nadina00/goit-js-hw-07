import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryCollec = document.querySelector(".gallery");
const galleryImage = document.querySelector(".gallery__image")
const itemList = creatGalleryItem(galleryItems); 
galleryCollec.insertAdjacentHTML("beforeend", itemList);
galleryCollec.addEventListener("click", onGalleryCollecClick);

function creatGalleryItem(galleryItems){
    return galleryItems.map(({preview, description, original}) => {
        return`
<div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title = "${description}" />
</a>
</div>`;}).join("");}

function onGalleryCollecClick(evt){
    evt.preventDefault();
    const galleryTargetEl = evt.target.classList.value;
    console.log(galleryTargetEl);
    if(galleryTargetEl !== "gallery__image"){
        return;
    }
    new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
    }