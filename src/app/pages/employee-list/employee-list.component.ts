import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public userArr: User[];

  constructor(private _userservice:UserService) {
    this.userArr = [];
   }

  ngOnInit(): void {
    this.userArr = this._userservice.getAllUsers();
  }

  search(term:string){
    this.userArr = this._userservice.searchUsers(term);    
  }
}
