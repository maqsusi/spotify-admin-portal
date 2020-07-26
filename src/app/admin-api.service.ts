import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  loggedIn;
  constructor(private http: HttpClient) { }

  showSongs(): Observable<any>
  {
    return this.http.get("https://akshat-assignment.azurewebsites.net/api/admin/songs");
  }

  deleteSong(data): Observable <any>
  {   console.log(data);
      return this.http.post("https://akshat-assignment.azurewebsites.net/api/admin/RemoveSong", {"SongId" : data});
  }

  showArtists(): Observable<any>
  {
    return this.http.get("https://akshat-assignment.azurewebsites.net/api/admin/artists");
  }

  addSong(data): Observable<any>
  {
    console.log(data);
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/admin/addsong", {"SongName": data.songName, "SongPath": data.path, "ArtId": data.artistId});
  }

  addArtist(data): Observable<any>
  {
    console.log(data);
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/admin/addartist", {"ArtistName": data.artistName});
  }

  adminLogin(data): Observable<any>
  {
    console.log(data);
    return this.http.post("https://akshat-assignment.azurewebsites.net/api/admin/adminlogin", data);
  }

  logIn()
  {
    return true;
  }
}
