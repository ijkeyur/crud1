import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UpdatecrudComponent } from './updatecrud/updatecrud.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  crudFrom: FormGroup;

  crud: any;
  array = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getLocalStorageItem();
    this.init();
  }

  init() {
    this.crudFrom = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.array.push(this.crudFrom.value)
    localStorage.setItem('crud', JSON.stringify(this.array));

    this.crud = JSON.parse(localStorage.getItem('crud') as string);
  }

  getLocalStorageItem() {
    this.crud = JSON.parse(localStorage.getItem('crud') as string);
  }

  delete(i) {
    this.crud = this.crud.slice(i);
    localStorage.setItem('crud', JSON.stringify(this.crud));
  }

  update() {
    console.log("crud", this.crud)
    const dialogRef = this.dialog.open(UpdatecrudComponent, {
      data: this.crud,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

