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
      console.log(json['fields'])
      let title = json["fields"]["Title"];
      let desc = json["fields"]["Notes (rename to Short Description?)"];

      let titleSpan = document.createElement("span");
      titleSpan.setAttribute("class", "notbold");
      titleSpan.innerText = title;
      el("title").appendChild(titleSpan);

      let descSpan = document.createElement("span");
      descSpan.setAttribute("class", "notbold");
      descSpan.innerText = desc;
      el('desc').appendChild(descSpan);
    });
}
