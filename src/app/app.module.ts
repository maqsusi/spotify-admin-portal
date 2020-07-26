import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowSongsComponent } from './show-songs/show-songs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowArtistsComponent } from './show-artists/show-artists.component';
import { AddSongsComponent } from './add-songs/add-songs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { OptionsBarComponent } from './options-bar/options-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowSongsComponent,
    ShowArtistsComponent,
    AddSongsComponent,
    AddArtistComponent,
    LoginAdminComponent,
    OptionsBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
