import { WeatherService } from './../services/weather.service';
import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchQuery: any;
  artists: any;
  playlists: any;
  images: any;

  weatherData: any;
  lat: string;
  lon: string;

  constructor(private spotifyHttp: SpotifyService,
    private weatherHttp: WeatherService) { }

  ngOnInit() {
    this.getLatLon();
  }

  searchArtists() {
    this.spotifyHttp.getAllArtists(this.searchQuery).subscribe((data) => {
      this.artists = data;
      console.log(data)
    });
  }

  searchPlaylists() {
    this.spotifyHttp.getAllPlaylists(this.searchQuery).subscribe((data) => {
      this.playlists = data.playlists.items;
      console.log(data)
    });
  }

  getLatLon() {
    this.weatherHttp.getGeolocation()
    .subscribe((data) => {
      this.lat = data.latitude;
      this.lon = data.longitude;
      console.log(this.lat, this.lon);
    }); setTimeout(() => {
      this.getWeatherData();
    }, 500);
  }

  getWeatherData() {
    this.weatherHttp.getCurrentWeather(this.lat, this.lon)
    .subscribe((data) => {
      this.weatherData = data;
      console.log(data);
    })
  }
}
