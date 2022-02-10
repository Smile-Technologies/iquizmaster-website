import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() state = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  openLoginModel(value) {
    this.state.emit(value)
  }
}
