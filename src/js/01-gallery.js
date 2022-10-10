// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector("div.gallery");


const newImg = galleryItems
    .map(
        (image) =>
            `<a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>`
    )
    .join("");
console.log(gallery)
gallery.insertAdjacentHTML("beforeend", newImg);

const light = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: "bottom",
});


console.log(galleryItems);
