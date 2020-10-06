document.addEventListener("DOMContentLoaded", () => {
    let params = new URLSearchParams(location.search);
    let newParams = params.toString().replace("=", "").replace(/\+/g, " ");
  
    fetchInfo(newParams);
  });
  
  function fetchLead(leadName) {
    fetch(`https://api.airtable.com/v0/appLEUbFdeF5Hd3fj/Contacts/${leadName}`, {
      headers: {
        Authorization: "Bearer key7zU3LJQO0JQP2R",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        let name = json["fields"]["Name"];
        let leadEmail = json["fields"]["Email"];
  
        let aLead = document.createElement("a");
        let linkTextLead = document.createTextNode(name);
        aLead.appendChild(linkTextLead);
        aLead.innerText = `\u00A0${name}\u00A0\u00A0`;
        aLead.href = `mailto:${leadEmail}`;
        aLead.title = "Click Here";
        aLead.target = "_blank";
        document.getElementById("lead").appendChild(aLead);
      });
  }
  
  function leadArray(arr) {
    if (arr === undefined) return "none";
    for (let i = 0; i < arr.length; i++) {
      fetchLead(arr[i]);
    }
  }
  
  function fetchReportLead(reportLeadName) {
    fetch(
      `https://api.airtable.com/v0/appLEUbFdeF5Hd3fj/Contacts/${reportLeadName}`,
      {
        headers: {
          Authorization: "Bearer key7zU3LJQO0JQP2R",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        let name = json["fields"]["Name"];
        let leadEmail = json["fields"]["Email"];
  
        let aReportLead = document.createElement("a");
        let linkTextReport = document.createTextNode(name);
        aReportLead.appendChild(linkTextReport);
        aReportLead.innerText = `\u00A0${name}\u00A0\u00A0`;
        aReportLead.href = `mailto:${leadEmail}`;
        aReportLead.title = "Click Here";
        aReportLead.target = "_blank";
        document.getElementById("reportLead").appendChild(aReportLead);
      });
  }
  
  function reportLeadArray(arr) {
    if (arr === undefined) return "none";
    for (let i = 0; i < arr.length; i++) {
      fetchReportLead(arr[i]);
    }
  }
  
  function fetchMember(memberName) {
      fetch(
        `https://api.airtable.com/v0/appLEUbFdeF5Hd3fj/Contacts/${memberName}`,
        {
          headers: {
            Authorization: "Bearer key7zU3LJQO0JQP2R",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => { console.log(json['fields']['Email'])
          let name = json["fields"]["Name"];
          let memberEmail = json["fields"]["Email"];
  
          let aMember = document.createElement("a");
          // let linkTextReport = document.createTextNode(name);
          // aReportLead.appendChild(linkTextReport);
          aMember.innerText = `${name}\u00A0\u00A0\u00A0`;
          aMember.href = `mailto:${memberEmail}`;
          aMember.title = "Click Here";
          aMember.target = "_blank";
          document.getElementById("members").appendChild(aMember);
        });
    }
  
  function membersArray(arr) {
    if (arr === undefined) return "none";
    for (let i = 0; i < arr.length; i++) {
      //console.log(arr[i]);
      fetchMember(arr[i]);
    }
  }
  
  function fetchInfo(group) {
    fetch("https://api.airtable.com/v0/appLEUbFdeF5Hd3fj/Working%20Groups?", {
      headers: {
        Authorization: "Bearer key7zU3LJQO0JQP2R",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        let groupData = {};
  
        for (let i in json.records) {
          if (json.records[i]["fields"]["Working Group Name"] === group) {
            let groupGoal = json.records[i]["fields"]["Goal"];
            let groupName = json.records[i]["fields"]["Working Group Name"];
            let driveFolder = json.records[i]["fields"]["Drive Folder"];
            let leads = json.records[i]["fields"]["Lead(s)"];
            let reportingLead = json.records[i]["fields"]["Reporting Lead"];
            let groupEmail = json.records[i]["fields"]["Group Email"];
            let groupDiscussion = json.records[i]["fields"]["Group Discussion"];
            let agendaDocument = json.records[i]["fields"]["Agenda Document"];
            let keyObjectives = json.records[i]["fields"]["Objectives"];
            let groupConstraints = json.records[i]["fields"]["Constraints"];
            let groupMembers = json.records[i]["fields"]["Members"];
  
            groupData.goal = groupGoal;
            groupData.name = groupName;
            groupData.folder = driveFolder;
            groupData.lead = leads;
            groupData.reporting = reportingLead;
            groupData.email = groupEmail;
            groupData.history = groupDiscussion;
            groupData.agenda = agendaDocument;
            groupData.objectives = keyObjectives;
            groupData.constraints = groupConstraints;
            groupData.members = groupMembers;
          }
        }
        let leads = groupData.lead;
        leadArray(leads);
        //console.log(leads);
        //document.getElementById("lead").innerText = groupData.lead;
        let reportLead = groupData.reporting;
        reportLeadArray(reportLead);
  
        let members = groupData.members;
        membersArray(members);
        console.log(members);
  
        let node1 = document.createElement("LI");
        let textnode1 = document.createTextNode(
          `${groupData.name} Working Group`
        );
        node1.appendChild(textnode1);
        document.getElementById("group").appendChild(node1);
  
        let aGoal = document.createElement("span");
        let linkTextGoal = document.createTextNode(groupData.goal);
        aGoal.appendChild(linkTextGoal);
        document.getElementById("goal").appendChild(aGoal);
  
        let aGroup = document.createElement("a");
        let linkTextGroup = document.createTextNode(groupData.folder);
        aGroup.appendChild(linkTextGroup);
        aGroup.title = "Click Here";
        if (groupData.folder.includes("https://")) {
          aGroup.href = `${groupData.folder}`;
        } else {
          aGroup.href = `https://${groupData.folder}`;
        }
        aGroup.target = "_blank";
        aGroup.innerText = "Click here";
        document.getElementById("groupName").appendChild(aGroup);
  
        let aEmail = document.createElement("a");
        let linkTextEmail = document.createTextNode(groupData.email);
        aEmail.appendChild(linkTextEmail);
        aEmail.title = "Click Here";
        aEmail.href = `mailto:${groupData.email}`;
        document.getElementById("email").appendChild(aEmail);
  
        let aHistory = document.createElement("a");
        let linkTextHistory = document.createTextNode(groupData.history);
        aHistory.appendChild(linkTextHistory);
        aHistory.title = "Click Here";
        if (groupData.history.includes("https://")) {
          aHistory.href = `${groupData.history}`;
        } else {
          aHistory.href = `https://${groupData.history}`;
        }
        aHistory.target = "_blank";
        aHistory.innerText = "Click here";
        document.getElementById("history").appendChild(aHistory);
  
        let aAgenda = document.createElement("a");
        let linkTextAgenda = document.createTextNode(groupData.agenda);
        aAgenda.appendChild(linkTextAgenda);
        aAgenda.title = "Click Here";
        if (groupData.agenda.includes("https://")) {
          aAgenda.href = `${groupData.agenda}`;
        } else {
          aAgenda.href = `https://${groupData.agenda}`;
        }
        aAgenda.target = "_blank";
        aAgenda.innerText = "Click here";
        document.getElementById("agenda").appendChild(aAgenda);
  
        document.getElementById("keys").innerText = groupData.objectives;
  
        document.getElementById("constraints").innerText = groupData.constraints;
      });
  }