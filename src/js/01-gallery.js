// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
 const markup = createItemsMarkup(galleryItems);
 gallery.insertAdjacentHTML("beforeend", markup);



 function createItemsMarkup(item) {
 return galleryItems
   .map(({ preview, original, description }) => {
     return `<div class="gallery__item">
 <a class="gallery__link" href="${original}">
 <img
 class="gallery__image"
 src="${preview}"
 alt="${description}"/></a></div>`;})
     .join("");
  
 }


const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 50,
});