import { Component, OnInit } from '@angular/core';
import { AdminApiService} from '../admin-api.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-songs',
  templateUrl: './add-songs.component.html',
  styleUrls: ['./add-songs.component.css']
})
export class AddSongsComponent implements OnInit {
  invalid = false;
  songForm;
  constructor(private api: AdminApiService, private fb: FormBuilder, private route: Router) {
    // this.addSong();
    if (!localStorage.getItem("admin")) {
      this.route.navigateByUrl("");
    }
    this.songForm = this.fb.group({
      'songName': this.fb.control("", Validators.required),
      'path': this.fb.control("", Validators.required),
      'artistId': this.fb.control("", Validators.required)
    })
   }

  ngOnInit(): void {
  }

  addSong()
  {

    if(this.songForm.valid)
    {
      console.log(this.songForm.value);
      var data = {
        songName: this.songForm.value.songName,
        path: this.songForm.value.path,
        artistId: this.songForm.value.artistId
      };

      console.log(data);

      
      this.api.addSong(data).subscribe(res =>
        {
          console.log(res);
          if(res)
          {
            this.route.navigateByUrl("/Songs")
          }
          else
          {
            this.invalid = true;
          }
        }), (err) =>{
          this.invalid = true;
          console.log(err);
        }
    }
    else
    {
      this.invalid = true;
    }
    
  

  
  }

}
