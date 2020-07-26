import { Component, OnInit } from '@angular/core';
import {  AdminApiService} from "../admin-api.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-songs',
  templateUrl: './show-songs.component.html',
  styleUrls: ['./show-songs.component.css']
})
export class ShowSongsComponent implements OnInit {

  allSongs = [];
  
  constructor(private api: AdminApiService, private route: Router) {
    if (!localStorage.getItem("admin")) {
      this.route.navigateByUrl("");
    }
    this.api.showSongs().subscribe((data: any[]) =>
    {
      console.log(data);
      this.allSongs = data;
      console.log(this.allSongs);
    })

    this.api.showArtists().subscribe((data: any[]) =>
    {
      console.log(data);
    })
   }

  ngOnInit(): void {
  }

  deleteSong(id)
  {
    this.api.deleteSong(id).subscribe((data) =>
    {
      console.log(data);
      this.api.showSongs().subscribe((data: any[]) =>
    {
      console.log(data);
      this.allSongs = data;
      console.log(this.allSongs);
    })

    })
  }

}
