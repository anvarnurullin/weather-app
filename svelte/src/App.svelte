<script>
  import { onMount, useState } from "svelte";
  import axios from "axios";

  let data = {};
  let location = "Saint Petersburg";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b7b5b933dd0f0d4401f993ab971a3a8b`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        data = response.data;
      });
      location = "";
    }
  };

  onMount(() => {
    axios.get(url).then((response) => {
      data = response.data;
    });
    location = "";
  });
</script>

	<div class="app">
	<div class="search">
		<input
		value={location}
		on:input={(event) => (location = event.target.value)}
		on:keypress={searchLocation}
		placeholder="Enter location"
		type="text"
		/>
	</div>
	<div class="container">
		<div class="top">
		<div class="location">
			<p>{data.name}</p>
		</div>
		<div class="temp">
			<h1>{data.main.temp}°C</h1>
		</div>
		<div class="description">
			<p>{data.weather[0].main}</p>
		</div>
		</div>
		<div class="bottom">
			<div class="feels">
				<p class="bold">{data.main.feels_like}°C</p>
			<p>Feels like</p>
			</div>
			<div class="humidity">
			<p class="bold">{data.main.humidity}%</p>
			<p>Humidity</p>
			</div>
			<div class="wind">
			<p class="bold">{data.wind.speed} KPH</p>
			<p>Wind Speed</p>
			</div>
		</div>
	</div>
	</div>