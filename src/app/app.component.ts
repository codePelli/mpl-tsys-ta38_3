import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  userList: Array<{ codigo: number; descripcion: string; precio: string}> = [];
users: any;

  onSaveUser(user: any) {
    this.userList.push(user);
  }

  onDeleteUser(user: any){
    
  }

  onSelUser(user:any){
    this.userList.push(user);
  }

  ngOnInit(): void {
  }
}