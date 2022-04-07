import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: string, lon: string) {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=b4a0e69f7f7da9e3c740deceb4645de5`
    return this.http.get<any>(weatherUrl);
  }

  getGeolocation() {
    let locationUrl = `https://api.ipgeolocation.io/ipgeo?apiKey=683a1b9eb1b445618daba5c2d475d5b7`
    return this.http.get<any>(locationUrl);
  }
}
