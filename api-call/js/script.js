const apiLink = "https://thronesapi.com/api/v2/characters"
fetch(apiLink)  
.then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
