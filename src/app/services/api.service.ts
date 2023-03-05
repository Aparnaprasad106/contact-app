import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //all contacts
  allcontacts()
  {
    //http request to get all contact data from api
   return this.http.get('http://localhost:3000/contacts')
  }
  //api to get a particular contact
  viewcontact(contactid:string)
  {
    return this.http.get('http://localhost:3000/contacts/'+contactid)

  }
// api call for getting a particular contacts group information
viewcontactGroupName(groupid:string){
  return this.http.get('http://localhost:3000/groups/'+groupid)
}
//API call to get all groups
allGroups()
  {
    return this.http.get('http://localhost:3000/groups')
  }
  //api call to add new contact detils
  addcontact(contact:any)
  {
    return this.http.post('http://localhost:3000/contacts',contact)
  }
  //api call to delete contact
  deletecontact(contactid:any){
    return this.http.delete('http://localhost:3000/contacts/'+contactid)
  }
//api call to update existing contact
updateContact(contactId:string,contactbody:any){
  return this.http.put('http://localhost:3000/contacts/'+contactId,contactbody)
}
}
