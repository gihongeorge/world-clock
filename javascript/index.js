function updateTime() {
  // Los Angeles
  let LosAngelesElement = document.querySelector("#los-angeles");
  if (LosAngelesElement) {
      let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
      let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
      let LosAngelesTime = moment().tz("America/Los_Angeles");

      LosAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");
      LosAngelesTimeElement.innerHTML = LosAngelesTime.format("h:mm:ss") + "<small>" + LosAngelesTime.format("A") + "</small>";
  }

  // Tokyo
  let TokyoElement = document.querySelector("#Tokyo");
  if (TokyoElement) {
      let TokyoDateElement = TokyoElement.querySelector(".date");
      let TokyoTimeElement = TokyoElement.querySelector(".time");
      let TokyoTime = moment().tz("Asia/Tokyo");

      TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY");
      TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss") + "<small>" + TokyoTime.format("A") + "</small>";
  }

  // Toronto
  let TorontoElement = document.querySelector("#Toronto");
  if (TorontoElement) {
      let TorontoDateElement = TorontoElement.querySelector(".date");
      let TorontoTimeElement = TorontoElement.querySelector(".time");
      let TorontoTime = moment().tz("America/Toronto");

      TorontoDateElement.innerHTML = TorontoTime.format("MMMM Do YYYY");
      TorontoTimeElement.innerHTML = TorontoTime.format("h:mm:ss") + "<small>" + TorontoTime.format("A") + "</small>";
  }

  // Istanbul
  let IstanbulElement = document.querySelector("#Istanbul");
  if (IstanbulElement) {
      let IstanbulDateElement = IstanbulElement.querySelector(".date");
      let IstanbulTimeElement = IstanbulElement.querySelector(".time");
      let IstanbulTime = moment().tz("Europe/Istanbul");

      IstanbulDateElement.innerHTML = IstanbulTime.format("MMMM Do YYYY");
      IstanbulTimeElement.innerHTML = IstanbulTime.format("h:mm:ss") + "<small>" + IstanbulTime.format("A") + "</small>";
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1] || cityTimeZone;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 10000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
