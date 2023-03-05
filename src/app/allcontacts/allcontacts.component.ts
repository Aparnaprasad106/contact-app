import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-allcontacts',
  templateUrl: './allcontacts.component.html',
  styleUrls: ['./allcontacts.component.css']
})
export class AllcontactsComponent implements OnInit{
  //to hold allcontacts data from api
  allcontacts:any=[]
  //create search key for access the data from the input tag
  searchKey:string=''
  constructor(private api:ApiService)
  {
    
  }
  ngOnInit(): void {
   this.getAllcontact()
  }
  // get all contactd
  getAllcontact(){
    this.api.allcontacts()
    .subscribe((result:any)=>{
      //result is  allcontacts array from api
      console.log(result);
      this.allcontacts=result
    })
  }
  //delete contact
  deletecontact(contactid:any){
    this.api.deletecontact(contactid)
    .subscribe((data:any)=>{
      // window.location.reload()
      this.getAllcontact()

    })
  }
}
