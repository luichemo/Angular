import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private _fb: FormBuilder){
    this.empForm = this._fb.group({
      firstname:'',
      lastname: '',
      username: '',
      email: '',
      Position: '',
      dateob: '',
      password: '',
      icode: '',
    });
  }

  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value)
    }
  }
}
