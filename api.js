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
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${localStorage.getItem("blog_token")}`
  );
  myHeaders.append("Accept", "application/json");
  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: data,
    redirect: "follow",
  };

  fetch(`${URL}/Journalnumber/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => callback(null, result))
    .catch((error) => callback(error, null));
};
////////////familyyyyyy
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
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${localStorage.getItem("blog_token")}`
  );
  myHeaders.append("Accept", "application/json");
  var formdata = new FormData();
  formdata.append("Name", data.Name);
  formdata.append("Position", data.position);

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(`${URL}/JournalFamily/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => callback(null, result))
    .catch((error) => callback(error, null));
};

export const addDataName = (data, callback) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${localStorage.getItem("blog_token")}`
  );
  myHeaders.append("Accept", "application/json");
  var formdata = new FormData();
  formdata.append("Name", data.Name);
  formdata.append("Position", data.position);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(`${URL}/JournalFamily`, requestOptions)
    .then((response) => response.text())
    .then((result) => callback(null, result))
    .catch((error) => callback(error, null));
};

export const addData = (data, callback) => {
  var myHeaders = new Headers();

  myHeaders.append("Accept", "application/json");
  myHeaders.append(
    "Authorization",
    `Bearer ${localStorage.getItem("blog_token")}`
  );
  myHeaders.append(
    "Cookie",
    "XSRF-TOKEN=eyJpdiI6ImlycFpjNlVLM2p0dnNFVXFiWEg5WHc9PSIsInZhbHVlIjoiQlNsRXFGS1lxVW94RmxRbTFhMG40L2YyUWZGdVg5dkJWK1VSY2F6NGNlWTVqNVlHM29JWU80RGNwNmxyaEFxWDFCcFM3enA5NXMySUNrRmYwQTJUOXd3cURTTTNDZkxwKzJVblE3K0k2WXNjQ2M3UzVYdnBRYnBubWVocFAyVFgiLCJtYWMiOiJjNjBlZDE5NDFiOWUzMzFhNTM5MWMxMDFhNDIxYzM0ZmYzNWE1YTA4OGRjMDBmOGNiMmIxZTA4OTAwN2ZhNTg0In0%3D; laravel_session=eyJpdiI6InVZTUpEc0hVZFFsSy9taFBqdVY1K1E9PSIsInZhbHVlIjoiRnhhSkYrcHRZVmk0Szd0UW5WTjBpWFZoS091VHc3aUV6MlRaczRNQTFDeEtNNmQxblUvT0tEZW5zaVlpemsybmRiNXllZUZPNTMwaWhqTDFKUVFSVllhZERQWGlSTGRhK3kxR1FyTXNuUnBkNlhiY3c2Y1I0cnFzTTBnWnlPWEgiLCJtYWMiOiJjMDcxYjhhMGRlMWMyYzg4YzY5MDcxMTJmMjFkZDJhZmRiM2FhYmUyMmFhYmI3OTk0ZmI5MmE3NmM1NzZhZmM1In0%3D"
  );
  var formdata = new FormData();
  formdata.append("Title", data.Title);
  formdata.append("Description", data.Description);
  formdata.append("ImgUrl", data.ImgUrl, data.ImgUrl.name);
  formdata.append("PdfUrl", data.PdfUrl, data.PdfUrl.name);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "http://awtadjournal.com/laravel/public/api/Journalnumber",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => callback(null, result))
    .catch((error) => console.log(error, null));
};
