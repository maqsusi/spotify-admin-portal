import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from "../admin-api.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  artistForm;
  invalid = false;
  constructor(private route: Router, private api: AdminApiService, private fb: FormBuilder) {
    if (!localStorage.getItem("admin")) {
      this.route.navigateByUrl("");
    }
    this.artistForm = this.fb.group({
      'artistName': this.fb.control("", Validators.required)

    })

  }

  ngOnInit(): void {
  }

  addArtist() {
    if (this.artistForm.valid) {
      console.log(this.artistForm.value);
      this.api.addArtist(this.artistForm.value).subscribe(res => {
        console.log(res);
        if (res) {
          this.route.navigateByUrl("/Artists")
        }
        else {
          this.invalid = true;
        }
      }), (err) => {
        this.invalid = true;
        console.log(err);
      }
    }
    this.invalid = true;
  }

}
