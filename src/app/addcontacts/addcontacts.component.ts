import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { myContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})
export class AddcontactsComponent implements OnInit {
  groups:any=[]
  contact:myContact={}
constructor(private api:ApiService,private addContactRouter:Router){
  this.contact.groupId='select a group'
  
}
ngOnInit():void{
  this.api.allGroups()
  .subscribe((result:any)=>{
    console.log(result);
    this.groups=result
  })
}
//addcontact
addContact(contact:any){
  this.api.addcontact(contact)
  .subscribe((data:any)=>{
    alert('new contact added succesfully')
    //redirect to all contact page
    this.addContactRouter.navigateByUrl('')
  })
}
}

