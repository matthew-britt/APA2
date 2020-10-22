document.addEventListener("DOMContentLoaded", () => {
  let params = location.search;
  let newParams = params.toString().replace("?", "").replace(/\%20/g, " ");
  renderTechDetail(newParams);
  console.log("Suck it, Trebek");
});

function el(id) {
  return document.getElementById(id);
}

function renderTechDetail(tool) {
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
          let tags = json.records[i]["fields"]["Tags"];
          let description = json.records[i]["fields"]["Description"];
          let awio = json.records[i]["fields"]["Animal Welfare Industry Only"];
          let contact = json.records[i]["fields"]["Contact"];
          let contactEmail = json.records[i]["fields"]["Contact Email"];
          let pricingModel = json.records[i]["fields"]["Pricing Model"];
          let pricingDetails = json.records[i]["fields"]["Pricing Details"];
          let attachments = json.records[i]["fields"]["Attachments"];
          let caseStudies = json.records[i]["fields"]["Case Studies"];
          console.log(awio);

          let toolLi = document.createElement("li");
          toolLi.innerText = tool;
          el("tool").appendChild(toolLi);

          let websiteLi = document.createElement("a");
          websiteLi.innerText = website;
          websiteLi.title = "Click here";
          websiteLi.href = website;
          websiteLi.target = "_blank";
          el("website").appendChild(websiteLi);

          tags.forEach((tag) => {
            let tagA = document.createElement("a");
            tagA.innerText = `${tag}\u00A0\u00A0\u00A0`;
            tagA.title = "Click here";
            tagA.href = `./techlist.html?${tag}`;
            tagA.target = "_blank";
            el("tags").appendChild(tagA);
          });

          let descriptionP = document.createElement("p");
          descriptionP.innerText = description;
          el("description").appendChild(descriptionP);

          let awioSpan = document.createElement("span");
          if (awio === undefined) {
            awioSpan.innerText = "false";
          } else {
            awioSpan.innerText = awio;
          }
          el("awio").appendChild(awioSpan);

          let contactSpan = document.createElement("span");
          contactSpan.innerText = contact;
          el("contact").appendChild(contactSpan);

          let contactEmailA = document.createElement("a");
          if (contactEmail === undefined) {
            contactEmailA.innerText = "None";
          } else {
            contactEmailA.innerText = contactEmail;
            contactEmailA.title = "Click here";
            contactEmailA.href = `mailto:${contactEmail}`;
          }
          el("email").appendChild(contactEmailA);
        }
      }
    });
}
