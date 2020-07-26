import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowSongsComponent } from './show-songs/show-songs.component';
import { ShowArtistsComponent } from './show-artists/show-artists.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  {
    path: "Songs",
    component: ShowSongsComponent
  },
  {
    path: "Artists",
    component: ShowArtistsComponent
  },
  {
    path: "AddSong",
    component: AddSongsComponent
  },
  {
    path: "AddArtist",
    component: AddArtistComponent
  },
  {
    path: "",
    component: LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
