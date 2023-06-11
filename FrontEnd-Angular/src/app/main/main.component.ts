import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  TodoList:any[]=[];
  

  constructor(){


  }
  ngOnInit():void{
    this.getTodos();
  }

  reloadCurrentPage() {
    window.location.reload();
   }

Supprimer(todo:string){

  axios.delete('http://localhost:3000/delete'+todo).then(res=>{
    console.log(res);

  }).catch(err=>{
    console.log(err);
  })

}

  getTodos():void{

    axios.get('http://localhost:3000/').then(res=>{
      for(let k of res.data )
      {
        this.TodoList.push(k.name);
      }
      console.log(this.TodoList);

    }).catch(err=>{
      console.log(err);
    })


  }

}
