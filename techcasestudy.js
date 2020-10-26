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
      let contactEmail = json["fields"]["Contact Email"]
       
        .split(" ");

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
        contactEmail.forEach((ce) => {
          console.log(ce);
          contactEmailA.innerText = ce;
          contactEmailA.href = `mailto:${ce}`;
          contactEmailA.title = "Click Here";
          contactEmailA.target = "_blank";
        });
      }
      el("contactEmail").appendChild(contactEmailA);
    });
}
