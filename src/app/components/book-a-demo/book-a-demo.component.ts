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

  createScheduleForm: FormGroup;
  constructor(private fb: FormBuilder,
    private emailsService: EmailsService,
    public toastService: ToastService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.createScheduleForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      designation: ['', Validators.required],
      starts_at1: ['', Validators.required],
      ends_at1: ['', Validators.required],
      scheduled_date1: ['', Validators.required],
      starts_at2: ['', Validators.required],
      ends_at2: ['', Validators.required],
      scheduled_date2: ['', Validators.required],
    });
  }
  get f() {
    return this.createScheduleForm.controls;
  }

  showSuccess() {
    this.toastService.show('Demo Registration success.', {
      classname: 'bg-success text-light',
      delay: 2000,
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
    console.log(this.createScheduleForm.value);    
    this.emailsService.sendScheduleMailRequest(this.createScheduleForm.value).subscribe(data => {
      console.log(data);
      this.resetForm()
      this.showSuccess();
      this.router.navigate(['home']);
    })
  }

  resetForm() {
    this.createScheduleForm.reset()
  }
}
