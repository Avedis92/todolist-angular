import { Component, OnInit } from '@angular/core';
import { Todo } from './todoitem/todoitem.component';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isEdited=false;
  itemIndex=-1;
  todoItem=new Todo();
  todoList:Todo[]=[];
  addToListItem(todoItem:Todo){
    this.todoList.push(todoItem);
    return this.todoList;
  }
  deleteItem(index:number){
    this.todoList.splice(index,1);
    return this.todoList;
  }
  editItem(index:number){
   this.itemIndex=index;
   if(this.isEdited)this.isEdited=false;
   else this.isEdited=true;
   
  }
  update(index:number){
    this.isEdited=false;
    const item=Object.assign({},this.todoItem);
    this.todoList.splice(index,1,item);
    return this.todoList
  }
}
