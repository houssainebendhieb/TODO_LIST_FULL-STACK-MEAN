import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  
  

  Ajouter(addform:NgForm){
    const data=addform.value;
      addform.resetForm();
   axios.post('http://localhost:3000/add',data).then(res=>{
    console.log(res);
   }).catch(err=>{
    console.log(err);
   })
   
  }

}
