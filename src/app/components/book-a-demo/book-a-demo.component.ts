import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailsService } from 'src/app/emails.service';
import { ToastService } from 'src/app/toast.service';


@Component({
  selector: 'app-book-a-demo',
  templateUrl: './book-a-demo.component.html',
  styleUrls: ['./book-a-demo.component.css']
})
export class BookADemoComponent implements OnInit {

  submitted: boolean = false;
  createScheduleForm: FormGroup;
  isInstitute: boolean = false;
  constructor(private fb: FormBuilder,
    private emailsService: EmailsService,
    public toastService: ToastService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.createScheduleForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      designation: ['', Validators.required],
      insName: [''],
      starts_at1: [''],
      ends_at1: [''],
      scheduled_date1: [''],
      starts_at2: [''],
      ends_at2: [''],
      scheduled_date2: [''],
    });
  }
  get f() {
    return this.createScheduleForm.controls;
  }

  onSelectDesignation() {
    const desig = this.createScheduleForm.value.designation
    if (desig === "Institution") {
      this.isInstitute = true
    } else {
      this.isInstitute = false
    }
  }


  showSuccess() {
    this.toastService.show("Thank you for booking a demo with us. We will get back to you within 24 hours of your submission. Contact us via email at customersupport@iquizmaster.com for any queries."
      , {
        classname: 'bg-success text-light',
        delay: 4000,
        autohide: true,
        headertext: 'Success'
      });
  }

  showError() {
    this.toastService.show('I am a Error toast', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Error!!!'
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.createScheduleForm.value);
    if (this.createScheduleForm.valid) {
      this.emailsService.sendScheduleMailRequest(this.createScheduleForm.value).subscribe(data => {
        console.log(data);
        this.resetForm()
        this.showSuccess();
        this.router.navigate(['home']);
      }, error => {
        console.log(error)
      })
    }
  }

  resetForm() {
    this.createScheduleForm.reset()
  }
}
