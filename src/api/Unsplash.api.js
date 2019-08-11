import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_KEY,
  secret: process.env.REACT_APP_SECRET
});
export default unsplash;
