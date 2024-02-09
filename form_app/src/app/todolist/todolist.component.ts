import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  todos : any[] = [];
  newTodo : string | undefined;

  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name =this.newTodo;
      todo.isComplited = true;
      this.todos.push(todo);
      this.newTodo = '';
    }else{
      alert("Please Enter new Task")
    }
  }

  done(id:number){
    this.todos[id].isComplited = !this.todos[id].isComplited;
  }

  remove(id:number){
    this.todos = this.todos.filter((v,i)=> i !== id);
  }
}
