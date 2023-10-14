import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  empForm: FormGroup

  position: String[] =[
    'Developer',
    'Designer',
    'Support'
  ]
  selectedPosition: String =this.position[0];

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      firstname: ['', Validators.required],   // First Name is now required
      lastname: ['', Validators.required],    // Last Name is now required
      username: ['', Validators.required],    // User Name is now required
      email: ['', [Validators.required, Validators.email]],  // Email is now required and must be a valid email format
      Position: '',                          // Position is optional
      dateob: '',                            // Date of Birth is optional
      password: ['', Validators.required],    // Password is now required
      icode: ['', [Validators.required, Validators.maxLength(11)]]  // Identification Code is now required and limited to 11 characters
    });
  }

  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value)
    }
  }
}
