document.addEventListener("DOMContentLoaded", () => {
  // let params = new URLSearchParams(location.search);
  // let newParams = params.toString().replace("=", "").replace(/\+/g, " ");

  // fetchInfo(newParams);
  fetchTechList();
  console.log("Suck it, Trebek");
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
  document.getElementById("tagId").append(tagUl);
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
            const toolLi = document.createElement("a");
            toolLi.setAttribute("class", "list-group-item");
            toolLi.setAttribute("id", toolName);
            toolLi.innerText = toolName;
            toolLi.href = toolName;
            toolLi.addEventListener('click', showTechDetail);
            document.getElementById(tag).append(toolLi);
          }
        }
      }
    });
}

function showTechDetail(e) {
    e.preventDefault();
    let tool = e.target.id;
    fetch("https://api.airtable.com/v0/appT5nNiLF8Dr1wwj/Technology%20List/", {
    headers: {
      Authorization: "Bearer keyemv7utChwq4g5e",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      for (let i in json.records) {
          if (json.records[i]["fields"]["Name"] === tool) {
              let website = json.records[i]["fields"]["Website"];
              let tags = json.records[i]["fields"]["Tags"].toString();
              let description = json.records[i]["fields"]["Description"];
              let awio = json.records[i]["fields"]["Animal Welfare Industry Only"];
              let contact = json.records[i]["fields"]["Contact"];
              let contactEmail = json.records[i]["fields"]["Contact Email"];
              let pricingModel = json.records[i]["fields"]["Pricing Model"];
              let pricingDetails = json.records[i]["fields"]["Pricing Details"];
              let attachments = json.records[i]["fields"]["Attachments"];
              let caseStudies = json.records[i]["fields"]["Case Studies"];
              console.log(caseStudies)
            }
      }


    });
}
