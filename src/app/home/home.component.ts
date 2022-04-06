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

  constructor(private spotifyHttp: SpotifyService) { }

  ngOnInit() {
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

}
