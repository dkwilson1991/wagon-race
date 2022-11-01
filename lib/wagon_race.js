// TODO: write your code here

const eventHandler = ((event) => {
  const player1Place = () => {
    const teamList = document.querySelectorAll("#player1-race td").length;
    return teamList;
  };
  const player2Place = () => {
    const teamList = document.querySelectorAll("#player2-race td").length;
    return teamList;
  };

  if (event.key === "q") {
    const player1 = document.querySelector("#player1-race");
    player1.insertAdjacentHTML("afterbegin", "<td></td>");
  } else if (event.key === "p") {
    const player2 = document.querySelector("#player2-race");
    player2.insertAdjacentHTML("afterbegin", "<td></td>");
  }

  if (player1Place() === 12) {
    document.removeEventListener("keydown", eventHandler);
  } else if (player2Place() === 12) {
    document.removeEventListener("keydown", eventHandler);
  }
});

document.addEventListener("keydown", eventHandler);

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", (event) => {
  window.location.reload();
});
