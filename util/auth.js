import axios from "axios";

async function authenticate(username, password) {
  const url = ``;

  const response = await axios.post(url, {
    username: username,
    password: password,
  });

  const token = response.data.token;

  return token;
}

// Function to fetch the user's profile
async function getUserProfile(token) {
  const url = ``;

  // Set up headers with the bearer token for authentication
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await axios.get(url, { headers });

  return response.data;
}

async function createUser(username, email, name, password) {
  const url = ``;
  const roles = ["AOA"];
  const phone = "Your phone";
  const address = "Your address";

  const response = await axios.post(url, {
    username: username,
    email: email,
    password: password,
    roles: roles,
    name: name,
    phone: phone,
    address: address,
  });

  return response;
}

export function login(username, password) {
  return authenticate(username, password);
}

export function signup(username, email, name, password) {
  return createUser(username, email, name, password);
}

export function getProfile(token) {
  return getUserProfile(token);
}
