fetch("http://localhost:3000/teams-json", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((r) => r.json())
  .then((teams) => {
    displayTeams(teams);
  });

function displayTeams(teams) {
  console.info("display", teams);
  const teamsHTML = teams.map(
    (team) => `
        <tr>
          <td>${team.promotion}</td>
          <td>${team.members}</td>
          <td>${team.name}</td>
          <td>${team.url}</td>
          <td>
          <a data-id = "${team.id}">❌</a>
          </td>
        </tr>`
  );

  document.querySelector("#teams tbody").innerHTML = teamsHTML.join("");
  console.info("display", teamsHTML, teams);
}

function onSubmit(e) {
  e.preventDefault();

  fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      promotion: document.getElementById("promotion").value,
      members: document.getElementById("members").value,
      name: document.getElementById("name").value,
      url: document.getElementById("url").value,
    }),
  })
    .then((r) => r.json())
    .then((status) => {
      console.warn("status", status.success, status.id);
      if (status.success) {
        window.location.reload();
      }
    });
}

function initEvents() {
  const form = document.getElementById("editForm");
  form.addEventListener("submit", onSubmit);

  document.querySelector("#teams tbody").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      console.warn("delete", e.target.id);
    }
  });
}

initEvents();
