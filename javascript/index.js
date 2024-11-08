function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Toronto
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Istanbul
  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
    let istanbulDateElement = istanbulElement.querySelector(".date");
    let istanbulTimeElement = istanbulElement.querySelector(".time");
    let istanbulTime = moment().tz("Europe/Istanbul");

    istanbulDateElement.innerHTML = istanbulTime.format("MMMM Do YYYY");
    istanbulTimeElement.innerHTML = istanbulTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// Update selected city time
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
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
    <a href = "/">All cities</a>
  `;
}


// Initialize time updates
updateTime();
setInterval(updateTime, 10000);

// City select listener
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
