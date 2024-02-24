import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import emailjs, { send } from '@emailjs/browser';
import { FormBuilder, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,NgbCarouselModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: {ngSkipHydration: 'true'}
})
export class HomeComponent  {
  
  images =[
    {name: 'carousel-1.jpg' },
    {name: 'carousel-2.jpg'}
  ]

  showCarousel = true;
  showMenu: boolean = false;

  form: FormGroup = this.fb.group({
    from_name: ['',Validators.required],
    to_name: ['Admin', Validators.required],
    from_email: ['',[Validators.required,Validators.email]],
    subject: '',
    message: ['',Validators.required],

  });



  constructor(@Inject(PLATFORM_ID) private platformId: any, private fb: FormBuilder) {}


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }

    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 850) {
      // Reset the menu to default position when scrolling
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  checkScreenWidth() {
    if (isPlatformBrowser(this.platformId)) {
      // Set showMenu based on screen width
      this.showMenu = window.innerWidth > 850;
    }
  }
  onSubmit(form:NgForm ) { 
    if(form.valid) {
      
    }
    
  }
  @ViewChild('closebutton') closebutton:any;
  async send(){
    
    if(this.form.valid){
        emailjs.init('AeKFIFx4iDkhwO0Dq')
         let response = await emailjs.send("service_5a5phtr","template_895qvzp",{
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
          subject: this.form.value.subject,
          message: this.form.value.message,
          }); 
        
        this.form.reset();
        Swal.fire('Your email has been sent')
        this.closebutton.nativeElement.click();
      }
    }
    
    
    
}
