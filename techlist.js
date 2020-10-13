document.addEventListener("DOMContentLoaded", () => {
  // let params = new URLSearchParams(location.search);
  // let newParams = params.toString().replace("=", "").replace(/\+/g, " ");

  // fetchInfo(newParams);
  fetchTechList();
  console.log("Suck it, Trebek");
});

function fetchTechList() {
  let tagsArray = [];
  let updatedTags = [];
  fetch("https://api.airtable.com/v0/appT5nNiLF8Dr1wwj/Technology%20List/", {
    headers: {
      Authorization: "Bearer keyemv7utChwq4g5e",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      for (let i in json.records) {
        tagsArray.push(json.records[i]["fields"]["Tags"]);
      }
      
      for (let m = 0; m < tagsArray.length; m++) {
          for (let n = 0; n < tagsArray[m].length; n++) {
             // updatedTags.push(tagsArray[m][n]);
              console.log(tagsArray[m])
          }
      }
    });
//console.log(tagsArray[0])
//   for (let i = 0; i < tagsArray.length; i++) {
//     for (let j = 0; j < i.length; j++) {
//     }
//   }
};
//https://api.airtable.com/v0/appT5nNiLF8Dr1wwj/Technology%20List?maxRecords=3&view=Grid%20view
