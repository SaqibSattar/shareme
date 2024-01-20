// index.js
import { client } from '../client';

export const createOrGetUser = async (response, navigate) => {
  // Decode JWT token
  var base64Url = response.credential.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  const { name, picture, sub } = JSON.parse(jsonPayload);

  // Create user object
  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };

  // Store user data in localStorage
  localStorage.setItem('user', JSON.stringify(user));

  // Create or update user in Sanity
  await client.createIfNotExists(user);

  // Use navigate function to navigate to '/'
  navigate('/');
};
