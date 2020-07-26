import { Component, OnInit } from '@angular/core';
import {AdminApiService} from '../admin-api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-show-artists',
  templateUrl: './show-artists.component.html',
  styleUrls: ['./show-artists.component.css']
})
export class ShowArtistsComponent implements OnInit {
  artists = []
  constructor(private api: AdminApiService, private route: Router) {
    if (!localStorage.getItem("admin")) {
      this.route.navigateByUrl("");
    }
    this.api.showArtists().subscribe((data: any[]) =>
    {
      console.log(data);
      this.artists = data;
      console.log(this.artists);
    })

   }

  ngOnInit(): void {
  }

}
