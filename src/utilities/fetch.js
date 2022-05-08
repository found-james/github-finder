import axios from 'axios';

const usersApi = (text) => {

  return axios.get(
    `https://api.github.com/search/users?q=${ text }&client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
  };

const userApi = (username) => {
  return axios.get(
  `https://api.github.com/users/${ username }?client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);
};

const reposApi =  (username) => {
  return axios.get(
  `https://api.github.com/users/${ username }/repos?per_page=5&sort=created:asc&client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }`);

};

export { userApi, usersApi, reposApi };