import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.css']
})
export class ViewcontactsComponent implements OnInit {
  //properties of class
  contactid:string=''
  contact:any={}
  groupName:string=''
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }
 ngOnInit(): void {
  //to get path parameter
   this.activatedRoute.params.subscribe((data:any)=>{
    console.log(data.id);
    this.contactid=data.id
    console.log(this.contactid);
   })
   //to get deatails of a particular contact
   this.api.viewcontact(this.contactid)
   .subscribe((result:any)=>{
    console.log(result);
    //result makes as class property
    this.contact=result
    //to get group id from contact
    let groupid=this.contact.groupId
    console.log(groupid);
    //api for get group details
    this.api.viewcontactGroupName(groupid)
    .subscribe((data:any)=>{
      console.log(data);
      this.groupName=data.name
    })
   })
 }
}
