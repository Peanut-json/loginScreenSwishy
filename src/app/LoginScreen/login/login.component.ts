import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  @ViewChild('signinbtn') signinbtn!: ElementRef;
  @ViewChild('signupbtn') signupbtn!: ElementRef;
  @ViewChild('formbox') formbox!: ElementRef;


   
 ngAfterViewInit() {
    this.signupbtn.nativeElement.addEventListener('click', () => {
      this.formbox.nativeElement.classList.add('active');
    });

    this.signinbtn.nativeElement.addEventListener('click', () => {
      this.formbox.nativeElement.classList.remove('active');
    });
  }


}


