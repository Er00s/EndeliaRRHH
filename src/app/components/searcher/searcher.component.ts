import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() termEvent: EventEmitter <string> = new EventEmitter<string>();

  constructor( private router: Router, private _userService: UserService) { }

  term: FormControl = new FormControl();
  termSub!: Subscription;

  ngOnInit(): void {
    this.searchSub();
    
  }

  searchSub() {
    this.termSub = this.term.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {         
        this.termEvent.emit(term);     
    });

  }
}
