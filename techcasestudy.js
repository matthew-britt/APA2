document.addEventListener("DOMContentLoaded", () => {
  // let params = new URLSearchParams(location.search);
  // let newParams = params.toString().replace("=", "").replace(/\+/g, " ");
  let params = location.search.replace("?", "");
  renderCaseStudyPage(params);

  console.log("Suck it again, Trebek");
});

function el(id) {
  return document.getElementById(id);
}

function renderTechnology(tech) {
  fetch(
    `https://api.airtable.com/v0/appT5nNiLF8Dr1wwj/Technology%20List/${tech}`,
    {
      headers: {
        Authorization: "Bearer keyemv7utChwq4g5e",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      let caseStudyTech = json["fields"]["Name"];
      let technologyA = document.createElement("a");
      technologyA.setAttribute("class", "notbold");
      technologyA.innerText = caseStudyTech;
      technologyA.title = "Click here";
      technologyA.href = `./techdetail.html?${caseStudyTech}`;
      technologyA.target = "_blank";
      el("technology").appendChild(technologyA);
    });
}

function renderTags(taglist) {
  for (let i of taglist) {
    let tagsA = document.createElement("a");
    tagsA.setAttribute("class", "notbold");
    tagsA.innerText = `${i}\u00A0\u00A0\u00A0`;
    tagsA.title = "Click here";
    tagsA.href = `./techlist.html`;
    tagsA.target = "_blank";
    el("tags").appendChild(tagsA);
  }
}

function renderCaseStudyPage(study) {
  fetch(
    `https://api.airtable.com/v0/appT5nNiLF8Dr1wwj/Case%20Studies/${study}`,
    {
      headers: {
        Authorization: "Bearer keyemv7utChwq4g5e",
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      //console.log(json["fields"]);
      let title = json["fields"]["Title"];
      let desc = json["fields"]["Notes (rename to Short Description?)"];
      let org = json["fields"]["Organization"];
      let orgType = json["fields"]["Organization Type"];
      let contactName = json["fields"]["Contact Name"];
      let contactEmail = json["fields"]["Contact Email"];
      let date = json["fields"]["Case Study Date"];
      let technology = json["fields"]["Technology"];
      let tags = json["fields"]["Tags (from Technology List)"];
      let dependencies = json["fields"]["Supporting Tech (duplicate of Technology Dependencies?)"];
      let cost = json["fields"]["Cost"];
      let discount = json["fields"]["Discount for Nonprofits?"];
      let usage = json["fields"]["Step by Step Journey (Usage)"];
      let implementation = json["fields"]["Step by Step Journey (Implementation)"];
      let quickStartGuide = json["fields"]["Quick Start Guide"];
      let ratingOverall = json["fields"]["Rating (1-5) - Overall Satisfaction"];
      let ratingEaseOfUse = json["fields"]["Rating (1-5) - Ease of Use"];
      let ratingEaseOfDeployment = json["fields"]["Rating (1-5) - Ease of Deployment"];
      console.log(ratingEaseOfDeployment);

      let titleSpan = document.createElement("span");
      titleSpan.setAttribute("class", "notbold");
      titleSpan.innerText = title;
      el("title").appendChild(titleSpan);

      let descSpan = document.createElement("span");
      descSpan.setAttribute("class", "notbold");
      descSpan.innerText = desc;
      el("desc").appendChild(descSpan);

      let orgSpan = document.createElement("span");
      orgSpan.setAttribute("class", "notbold");
      if (org === undefined) {
        orgSpan.innerText = "None";
      } else {
        orgSpan.innerText = org;
      }
      el("organization").appendChild(orgSpan);

      let orgTypeSpan = document.createElement("span");
      orgTypeSpan.setAttribute("class", "notbold");
      if (orgType === undefined) {
        orgTypeSpan.innerText = "None";
      } else {
        orgTypeSpan.innerText = orgType;
      }
      el("organizationType").appendChild(orgTypeSpan);

      let contactNameSpan = document.createElement("span");
      contactNameSpan.setAttribute("class", "notbold");
      if (contactName === undefined) {
        contactNameSpan.innerText = "None";
      } else {
        contactNameSpan.innerText = contactName;
      }
      el("contactName").appendChild(contactNameSpan);

      let contactEmailA = document.createElement("a");
      contactEmailA.setAttribute("class", "notbold");
      if (contactEmail === undefined) {
        contactEmailA.innerText = "None";
      } else {
        console.log();
        contactEmailA.innerText = contactEmail;
        contactEmailA.href = `mailto:${contactEmail}`;
        contactEmailA.title = "Click Here";
        contactEmailA.target = "_blank";
      }
      el("contactEmail").appendChild(contactEmailA);

      let dateSpan = document.createElement("span");
      dateSpan.setAttribute("class", "notbold");
      if (date === undefined) {
        dateSpan.innerText = "None";
      } else {
        dateSpan.innerText = date;
      }
      el("date").appendChild(dateSpan);

      let technologyA = document.createElement("a");
      technologyA.setAttribute("class", "notbold");
      if (technology === undefined) {
        technologyA.innerText = "None";
        el("technology").appendChild(technologyA);
      } else {
        //for (let i of technology) {
        renderTechnology(technology);
        //}
      }

      let tagsA = document.createElement("a");
      tagsA.setAttribute("class", "notbold");
      if (tags === undefined) {
        tagsA.innerText = "None";
        el("tags").appendChild(tagsA);
      } else {
        renderTags(tags);
      }

      let dependenciesSpan = document.createElement("span");
      dependenciesSpan.setAttribute("class", "notbold");
      if (dependencies === undefined) {
        dependenciesSpan.innerText = "None";
      } else {
        dependenciesSpan.innerText = dependencies;
      }
      el("dependencies").appendChild(dependenciesSpan);

      let costSpan = document.createElement("span");
      costSpan.setAttribute("class", "notbold");
      if (cost === undefined) {
        costSpan.innerText = "None";
      } else {
        costSpan.innerText = cost;
      }
      el("cost").appendChild(costSpan);

      let discountSpan = document.createElement("span");
      discountSpan.setAttribute("class", "notbold");
      if (discount === undefined) {
        discountSpan.innerText = "None";
      } else {
        discountSpan.innerText = discount;
      }
      el("discount").appendChild(discountSpan);

      let usageSpan = document.createElement("p");
      usageSpan.setAttribute("class", "notbold");
      if (usage === undefined) {
        usageSpan.innerText = "None";
      } else {
        usageSpan.innerText = usage;
      }
      el("usage").appendChild(usageSpan);

      let implementationSpan = document.createElement("p");
      implementationSpan.setAttribute("class", "notbold");
      if (implementation === undefined) {
        implementationSpan.innerText = "None";
      } else {
        implementationSpan.innerText = implementation;
      }
      el("implementation").appendChild(implementationSpan);

      let quickStartGuideA = document.createElement("a");
      quickStartGuideA.setAttribute("class", "notbold");
      if (quickStartGuide === undefined) {
        quickStartGuideA.innerText = "None";
      } else {
        console.log();
        quickStartGuideA.innerText = quickStartGuide;
        quickStartGuideA.href = quickStartGuide;
        quickStartGuideA.title = "Click Here";
        quickStartGuideA.target = "_blank";
      }
      el("quickStartGuide").appendChild(quickStartGuideA);

      let ratingOverallSpan = document.createElement("span");
      ratingOverallSpan.setAttribute("class", "notbold");
      if (ratingOverall === undefined) {
        ratingOverallSpan.innerText = "None";
      } else {
        ratingOverallSpan.innerText = ratingOverall;
      }
      el("ratingOverall").appendChild(ratingOverallSpan);

      let ratingEaseOfUseSpan = document.createElement("span");
      ratingEaseOfUseSpan.setAttribute("class", "notbold");
      if (ratingEaseOfUse === undefined) {
        ratingEaseOfUseSpan.innerText = "None";
      } else {
        ratingEaseOfUseSpan.innerText = ratingEaseOfUse;
      }
      el("ratingEaseOfUse").appendChild(ratingEaseOfUseSpan);


      let ratingEaseOfDeploymentSpan = document.createElement("span");
      ratingEaseOfDeploymentSpan.setAttribute("class", "notbold");
      if (ratingEaseOfDeployment === undefined) {
        ratingEaseOfDeploymentSpan.innerText = "None";
      } else {
        ratingEaseOfDeploymentSpan.innerText = ratingEaseOfDeployment;
      }
      el("ratingEaseOfDeployment").appendChild(ratingEaseOfDeploymentSpan);
    });
}
