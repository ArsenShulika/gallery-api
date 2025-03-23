import { fetchImages } from './js/pixabay-api.js';

fetchImages().then(data => {
  gallery.innerHTML = renderQuery(data);
});

function templateRender({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<div>
  <img src='${webformatURL}' alt='${tags}'/>
  <div>
    <h2>Likes</h2>
    <p>${likes}</p>
  </div>
  <div>
    <h2>Views</h2>
    <p>${views}</p>
  </div>
  <div>
    <h2>Comments</h2>
    <p>${comments}</p>
  </div>
  <div>
    <h2>Downloads</h2>
    <p>${downloads}</p>
  </div>
</div>`;
}

export function renderQuery(arr) {
  return arr.map(templateRender).join('');
}
