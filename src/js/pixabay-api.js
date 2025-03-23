import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function fetchImages(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '43182397-b36e0d0e4f4165f4a1d81192e',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      if (res.data.hits.length === 0) {
        return iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    })
    .catch(error => {
      return console.log('Fetch images failed:', error);
    });
}

fetchImages('dog');
