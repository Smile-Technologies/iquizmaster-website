import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbarOpen = false;
  closeResult: string;
  @ViewChild('login') login: ElementRef;
  @ViewChild('register') register: ElementRef;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  state(event) {
    console.log(event);
    if (event === 'login') {
      this.modalService.dismissAll();
      this.open(this.login)
    } else {
      this.modalService.dismissAll();
      this.open(this.register)
    }
  }
  open(content) {
    if (content === 'login') {
      window.open('https://app.iquizmaster.com/#/login','_self')
    }
    else {
      window.open('https://app.iquizmaster.com/#/register', '_self')
    }
    // this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
