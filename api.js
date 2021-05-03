const URL = "https://jsonplaceholder.typicode.com";

export const login = (data, callback) => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const addData = (data, callback) => {
  fetch(`${URL}/Journalnumber`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("blog_token"),
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getData = (callback) => {
  fetch(`${URL}/Journalnumber`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getOneData = (id, callback) => {
  fetch(`${URL}/Journalnumber/${id}`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const deleteOneData = (id, data, callback) => {
  fetch(`${URL}/Journalnumber/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
////////////familyyyyyy

export const addDataName = (data, callback) => {
  fetch(`${URL}/JournalFamily`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("blog_token"),
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getDataName = (callback) => {
  fetch(`${URL}/JournalFamily`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getOneDataName = (id, callback) => {
  fetch(`${URL}/JournalFamily/${id}`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const deleteOneDataName = (id, data, callback) => {
  fetch(`${URL}/JournalFamily/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
