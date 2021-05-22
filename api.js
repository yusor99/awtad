const URL = "http://awtadjournal.com/laravel/public/api";

export const login = (data, callback) => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const addData = (data, callback) => {
  console.log(JSON.stringify(data));
  fetch(`http://awtadjournal.com/laravel/public/api/Journalnumber`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer" + localStorage.getItem("blog_token"),
    },
    processData: false,
    mimeType: "multipart/form-data",
    contentType: false,
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
      Accept: "application/json",
      Authorization: "Bearer" + localStorage.getItem("blog_token"),
    },
    body: JSON.stringify(data),
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
      Authorization: "Bearer" + localStorage.getItem("blog_token"),
      Accept: "application/json",
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
      Accept: "application/json",
      Authorization: "Bearer" + localStorage.getItem("blog_token"),
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};
