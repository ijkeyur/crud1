import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatecrud',
  templateUrl: './updatecrud.component.html',
  styleUrls: ['./updatecrud.component.scss']
})
export class UpdatecrudComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatecrudComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder) { }
  updateForm: FormGroup;

  ngOnInit(): void {
    this.init();
    this.updateForm.patchValue(this.data.crud)
  }

  init() {
    this.updateForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    localStorage.setItem('crud', JSON.stringify(this.data));
    // JSON.stringify(this.data);

    const currentArray = JSON.parse(localStorage.getItem('crud') as string);

    // const index = currentArray.findIndex(e => e.id === id);
    if (this.data.crud >= 0) {
      currentArray[this.data.i] = { ...currentArray[this.data.i], ...{ firstName: this.data.crud.firstName } };
      localStorage.setItem('crud', currentArray);
    } else {
      console.log("error")
    }
  }
}
