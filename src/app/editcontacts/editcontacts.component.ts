import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editcontacts',
  templateUrl: './editcontacts.component.html',
  styleUrls: ['./editcontacts.component.css']
})
export class EditcontactsComponent implements OnInit {
  contactid:string=''
  contact:myContact={}
  Allgroups:any=[]
  constructor(private editcontactActivatedRoute:ActivatedRoute,private api:ApiService, private EditcontactUpdateRouter:Router){

  }
ngOnInit(): void {
  this.editcontactActivatedRoute.params
  .subscribe((data:any)=>{
   this.contactid=data.id
    console.log(this.contactid);
  })
  //to get details of a particular contact
  this.api.viewcontact(this.contactid)
  .subscribe((result:any)=>{
    this.contact=result
    console.log(this.contact);
    
  })
  //grt all grpoups from api
  this.api.allGroups()
  .subscribe((groups:any)=>{
     console.log(groups);
     this.Allgroups=groups
  })
}
 // editContact(contact)
  editContact(contact:myContact){
    this.api.updateContact(this.contactid,contact)
    .subscribe((result:any)=>{
      alert('existing contact details are updated...')
      // redirect to all contact page
      this.EditcontactUpdateRouter.navigateByUrl('')
    })
 
}
}

