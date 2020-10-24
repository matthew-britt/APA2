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
      // console.log(json['fields']['Title'])
      let title = json["fields"]["Title"];

      let titleSpan = document.createElement("span");
      titleSpan.setAttribute("class", "notbold");
      titleSpan.innerText = title;
      el("title").appendChild(titleSpan);

      let caseStudiesA = document.createElement("a");
      caseStudiesA.innerText = studyTitle;
      caseStudiesA.title = "Click here";
      caseStudiesA.href = `./techcasestudy.html?${study}`;
      caseStudiesA.target = "_blank";
      //el(studyTitle).appendChild(caseStudiesA);
    });
}
