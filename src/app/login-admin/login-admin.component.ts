import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../admin-api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  invalid = false;
  loggedIn = false;
  adminForm;
  constructor(private api: AdminApiService, private fb: FormBuilder, private route: Router) {
    if (localStorage.getItem("admin")) {
      this.route.navigateByUrl("/Songs");
    }
    this.adminForm = this.fb.group({
      "Username": this.fb.control("", Validators.required),
      "Password": this.fb.control("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  adminLogin() {
    console.log(this.adminForm.value);
    if(this.adminForm.valid)
    {
      this.api.adminLogin(this.adminForm.value).subscribe(res =>
        {
          console.log(res);
          if(res == 1)
          {
              localStorage.setItem("admin", res);
              this.loggedIn = true;
              this.route.navigateByUrl("/Songs");
              
          }
        })
    }
  }


}
