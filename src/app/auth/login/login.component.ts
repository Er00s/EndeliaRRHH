import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public submitted = false;
  public error = '';

  public formSubmitted = false;

  public loginForm:any ;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _userService: UserService 
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
    username: ['admin@admin.com', [Validators.required, Validators.minLength(3), Validators.email], ],
    password: ['admin123', [Validators.required]],
  });}

  login(){    
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this._userService.login(this.loginForm.value)
    this.router.navigate(['/employeeList'])
  }

 get f() { console.log(this.loginForm.controls)
   return this.loginForm.controls }
}
  