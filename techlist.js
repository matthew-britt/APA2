

document.addEventListener("DOMContentLoaded", () => {

  fetchTechList();
  console.log("Hi everybody!");
});

function el(id) {
  return document.getElementById(id);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function renderEachTag(tag) {
  const tagUl = document.createElement("ul");
  tagUl.setAttribute("class", "list-group");
  tagUl.setAttribute("id", tag);
  tagUl.innerText = tag;
  document.getElementById("tagId").appendChild(tagUl);
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

      let uniqueTagsArray = allTagsArray.filter(onlyUnique).sort();

      for (let j of uniqueTagsArray) {
        renderEachTag(j);
        addTechNamesToTags(j);
      }

      function addTechNamesToTags(tag) {
        for (let i in json.records) {
          if (json.records[i]["fields"]["Tags"].includes(tag)) {
            let toolName = json.records[i]["fields"]["Name"];
            //console.log(toolName.replace("%27", "'"))
            const toolNameLi = document.createElement("a");
            toolNameLi.setAttribute("class", "list-group-item");
            toolNameLi.setAttribute("id", toolName);
            toolNameLi.innerText = toolName;
            toolNameLi.href = `./techdetail.html?${toolName}`;
            toolNameLi.target = "_blank";
            document.getElementById(tag).append(toolNameLi);
          }
        }
      }
    });
}

