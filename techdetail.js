document.addEventListener("DOMContentLoaded", () => {
  
  // fetchInfo(newParams);
  
  let params = location.search;
  let newParams = params.toString().replace("?", "").replace(/\%20/g, " ");
  console.log(newParams)
  console.log("Suck it, Trebek");
});

function el(id) {
  return document.getElementById(id);
}

//let tool = e.target.id;

function showTechDetail(tool) {
  //e.preventDefault();
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
          //console.log(caseStudies)

          let toolLi = document.createElement("li");
          toolLi.innerText = tool;
          el("tool").appendChild(toolLi);
        }
      }
    });
}
