export function getUsers() {
  return fetch("http://www.mocky.io/v2/5b61e5e6300000f10d6a43ff").then(
    response => response.json()
  );
}

export function deleteUser(userId) {
  // Since we don't have an deleteUser api, just returning
  // a promise to simulate an async call to an API.
  return new Promise((resolve, reject) => {
    return resolve();
  });
}

export function saveUser(user) {
  return new Promise((resolve, reject) => {
    return resolve({ ...user });
  });
}
