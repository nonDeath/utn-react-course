import axios from '../../../lib/axios';

const get = () => axios.get(`sites/MLA/search?q=${encodeURIComponent('pioneer dj')}`);

const find = (itemId) => axios.get(`items/${itemId}`);

const findCatalog = (productId) => axios.get(`products/${productId}`);

export {get, find, findCatalog};
