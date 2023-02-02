fetch("teams.json")
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
          <td>Team Networking</td>
          <td>https://github.com/Michael-ZE/Michael-ZE.github.io</td>
        </tr>`
  );

  document.querySelector("#teams tbody").innerHTML = teamsHTML.join("");
  console.info("display", teamsHTML, teams);
}
