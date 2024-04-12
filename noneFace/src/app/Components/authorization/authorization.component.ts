import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule, MatCardModule,MatButtonModule, MatInputModule, MatIconModule,MatFormFieldModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent implements OnInit {
  loginForm!: FormGroup;
  hide: any;
  constructor(){}
  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email : new FormControl('',[ Validators.required, Validators.email]),
        password : new FormControl('',[ Validators.required, Validators.minLength(6)])
      }
    )
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }
  
}
