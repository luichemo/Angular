import { Component, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { NgForm,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-email-sending',
  standalone: true,
  imports: [MatIconModule,MatInputModule,MatFormFieldModule,MatDialogModule, FormsModule],
  templateUrl: './email-sending.component.html',
  styleUrl: './email-sending.component.scss'
})
export class EmailSendingComponent {

  constructor(public dialogRef: MatDialogRef<any>,@Inject(MAT_DIALOG_DATA) public data: any, ) {}
  model = {}  as any
  onSubmit(form:NgForm ) { 
    if(form.valid) {
      // this.postEmail(this.model)
      
    }
    
  }
  close(): void {
    this.dialogRef.close();
   
    
  }
}
