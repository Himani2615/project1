function showSlack() {
  var slackProfile = document.querySelector(".profile");
  if (slackProfile.style.display === "none") {
    slackProfile.style.display = "block";
  } else {
    slackProfile.style.display = "none";
  }
  event.stopPropagation();
}
document.addEventListener("click", () => {
  const slackProfile = document.querySelector(".profile");
  slackProfile.style.display = "none";
});

document.querySelector(".profile").addEventListener("click", (event) => {
  event.stopPropagation();
});

document.querySelector(".nav-link").addEventListener("click", showSlack);

document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.querySelector(".currentTime");
  const currentDay = document.querySelector(".currentDay");

  function updateTime() {
    const now = new Date();
    currentTimeUTC.textContent = `Current Time (UTC): ${
      now.toUTCString().split(" ")[4]
    }`;
    currentDay.textContent = `Current Day: ${now.toLocaleString("en-US", {
      weekday: "long",
    })}`;
  }

  updateTime();
  setInterval(updateTime, 1);
});
