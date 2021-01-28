import axios from 'axios';

const Apikey = 'AIzaSyD4t8TJo4krhN-qJy_gMGE2Q54hR5UHfeE';
const URL = 'https://www.googleapis.com/youtube/v3'

export default axios.create({
  baseURL: URL,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: Apikey
  }
})
