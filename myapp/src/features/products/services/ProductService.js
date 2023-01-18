import axios from '../../../lib/axios';

const get = () => axios.get(`sites/MLA/search?q=${encodeURIComponent('pioneer dj')}`);


export default get;
