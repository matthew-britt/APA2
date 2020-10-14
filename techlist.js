document.addEventListener("DOMContentLoaded", () => {
  // let params = new URLSearchParams(location.search);
  // let newParams = params.toString().replace("=", "").replace(/\+/g, " ");

  // fetchInfo(newParams);
  fetchTechList();
  console.log("Suck it, Trebek");
});

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function fetchTechList() {
  let tagsArray = [];
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

      let allTagsArray = tagsArray.toString().split(",");

      let uniqueTagsArray = allTagsArray.filter(onlyUnique)

      console.log(uniqueTagsArray);

      //   for (let m = 0; m < tagsArray.length; m++) {
      //       for (let n = 0; n < tagsArray[m].length; n++) {
      //          // updatedTags.push(tagsArray[m][n]);
      //       }
      //   }
    });
}
//https://api.airtable.com/v0/appT5nNiLF8Dr1wwj/Technology%20List?maxRecords=3&view=Grid%20view
