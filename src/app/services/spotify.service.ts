import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private authorizationKey = 'Bearer BQBocYh-4jwFdl50cXwvw__1_hdPXdLPcObobqYsfzTd2SSWoJvRKJVtc5Bh0OKXcz6ZIP-xhBZjBCNzYMM1hbIX6gAZKLbGgX5x6dXuzt7gHz9vE6LC_u6zS9e2-z-pm7sL6N2gdlY';

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type' : 'application/json',
      'Authorization': this.authorizationKey
    })
  }

  constructor(private http: HttpClient) { }

  getAllArtists(searchQuery: string) {
    let playlistUrl = `https://api.spotify.com/v1/search?query=${searchQuery}&offset=0&limit=20&type=artist`
    return this.http.get(playlistUrl, this.httpOptions);
  }

  getAllPlaylists(searchQuery: string) {
    let playlistUrl = `https://api.spotify.com/v1/search?query=${searchQuery}&offset=0&limit=20&type=playlist`
    return this.http.get<any>(playlistUrl, this.httpOptions);
  }
}

