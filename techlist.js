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

function renderEachTag(tag) {
  const tagLi = document.createElement("li");
  tagLi.setAttribute("class", "list-group-item");
  //tagLi.setAttribute('data-id')
  tagLi.innerText = tag;
  //tagLi.addEventListener('click', showSingleBeerDetails);
  document.getElementById("tagId").append(tagLi);
}

//let uniqueTagsArray = [];

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

      let uniqueTagsArray = allTagsArray.filter(onlyUnique);

      for (let i of uniqueTagsArray) {
        renderEachTag(i);
      }

      function addTechNamesToTags(tag) {
          for (let i in json.records) {
              
              if (json.records[i]["fields"]["Tags"].includes(tag)) {
                console.log(json.records[i]["fields"]["Name"])
                }
            }
        }
      addTechNamesToTags("Foster")
    });
}
//console.log(uniqueTagsArray);
//https://api.airtable.com/v0/appT5nNiLF8Dr1wwj/Technology%20List?maxRecords=3&view=Grid%20view
