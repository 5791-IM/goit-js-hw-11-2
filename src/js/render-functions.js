import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const galleryList = document.querySelector('.gallery');

export function renderImages(data) {
  const markup = data.hits
    .map(
      ({ webformatURL, largeImageURL, targs, views, comments, downloads }) => {
        return `<li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
      <div class="desc-container">
       <div class="img-desc">
      <p class="img-desc-title">Likes</p>
      <p class="img-desc-content">${likes}</p>
    </div>
    <div class="img-desc">
      <p class="img-desc-title">Views</p>
      <p class="img-desc-content">${views}</p>
    </div>
    <div class="img-desc">
      <p class="img-desc-title">Comments</p>
      <p class="img-desc-content">${comments}</p>
    </div>
    <div class="img-desc">
      <p class="img-desc-title">Downloads</p>
      <p class="img-desc-content">${downloads}</p>
    </div>
    </div>
    </a>
  </li>`;
      }
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);

  const gallery = new SimpleLightbox('.gallery a', {
    caption: true,
    captionDelay: 250,
    captionData: 'alt',
  });
  gallery.refresh();
}
