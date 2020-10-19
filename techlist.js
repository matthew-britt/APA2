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
  const tagUl = document.createElement("ul");
  tagUl.setAttribute("class", "list-group");
  tagUl.setAttribute("id", tag);
  tagUl.innerText = tag;
  //tagLi.addEventListener('click', showSingleBeerDetails);
  document.getElementById("tagId").append(tagUl);
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

      let uniqueTagsArray = allTagsArray.filter(onlyUnique).sort();

      for (let j of uniqueTagsArray) {
        renderEachTag(j);
        addTechNamesToTags(j);
        console.log(j);
      }

      function addTechNamesToTags(tag) {
        for (let i in json.records) {
          if (json.records[i]["fields"]["Tags"].includes(tag)) {
            let toolName = json.records[i]["fields"]["Name"];
            const toolLi = document.createElement("a");
            toolLi.setAttribute("class", "list-group-item");
            toolLi.setAttribute("id", toolName);
            toolLi.innerText = toolName;
            toolLi.href = toolName;
            //tagLi.addEventListener('click', showSingleBeerDetails);
            document.getElementById(tag).append(toolLi);
            //console.log(toolName);
          }
        }
      }
    });
}
