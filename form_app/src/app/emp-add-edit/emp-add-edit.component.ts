import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{

  empForm: FormGroup

  position: String[] =[
    'Developer',
    'Designer',
    'Support'
  ]
  selectedPosition: String =this.position[0];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService, 
    private _dialogRef:MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
    ) {
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

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee detail updated!');
            this._dialogRef.close(true);
          },
          error: (err:any) =>{
            console.error(err);
            
          },
        });
      }else{
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
            window.location.reload();
          },
          error: (err:any) =>{
            console.error(err);
            
          },
        });
      }
      
    }
  }
}
