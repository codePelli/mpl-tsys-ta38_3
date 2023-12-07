import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormComponent } from '../form/form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AppComponent, FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

@Input() users: Array<{ codigo: number; descripcion: string; precio: string }> = [];
@Output() selUser = new EventEmitter();

delete(codigo: number) {
  console.log(codigo);
}

sel(codigo: number) {
  console.log(codigo);
}

selFormGroup: FormGroup;

constructor(private fb: FormBuilder) {
  this.selFormGroup = this.fb.group({
    codigo: ['', Validators.required],
    descripcion: ['', Validators.required],
    precio: ['', Validators.required],
  });
}

ngOnInit(): void {
  console.log(this.selFormGroup);
}

send(): void {
  if (this.selFormGroup.valid) {
    this.selUser.emit(this.selFormGroup.value);
    this.selFormGroup.reset();
  }
}

}
