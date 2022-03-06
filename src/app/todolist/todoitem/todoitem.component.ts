import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todoItem=new Todo();
  @Output() pushTodoItem=new EventEmitter();
  addTodoItem(){
    const item=Object.assign({},this.todoItem)
    this.pushTodoItem.emit(item);
  }
}
export class Todo {
  name:string;
  creationDate:Date;
  constructor(){
    this.name='';
    this.creationDate=new Date();
  }
}