import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})
export class AppComponent implements OnInit {
  data: any = {};
  location: string = 'Saint Petersburg';

  ngOnInit() {
    this.fetchData();
    this.location = '';
  }

  fetchData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=b7b5b933dd0f0d4401f993ab971a3a8b`;
    axios.get(url).then((response) => {
      this.data = response.data;
    });
  }

  searchLocation() {
    this.fetchData();
    this.location = '';
  }
}