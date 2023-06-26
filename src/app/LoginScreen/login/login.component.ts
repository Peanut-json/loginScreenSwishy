import { Component, ElementRef, ViewChild, } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
  @ViewChild('signinbtn') signinbtn!: ElementRef;
  @ViewChild('signupbtn') signupbtn!: ElementRef;
  @ViewChild('formbox') formbox!: ElementRef;
  @ViewChild('body') body!: ElementRef;

  ngAfterViewInit() {
    this.signupbtn.nativeElement.addEventListener('click', () => {
      this.formbox.nativeElement.classList.add('active');
      this.body.nativeElement.classList.add('active');
    });

    this.signinbtn.nativeElement.addEventListener('click', () => {
      this.formbox.nativeElement.classList.remove('active');
      this.body.nativeElement.classList.remove('active');
    });
  }


}

//* creating on click event locgic to switch between signup and signin with the respected form and body elements. 

//* using child elements to be able ot view a add and remove state , this then creates a event listener to see whitch has been clicked , 
//* depending on whitch one is clicked will determine the method that will activate.
