import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() state = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  openRegisterModel(value) {
    this.state.emit(value)
  }
}
