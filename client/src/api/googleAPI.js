import axios from 'axios';

const googleUserData = (token) =>
  axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export default googleUserData;
