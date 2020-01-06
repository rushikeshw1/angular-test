import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users = [
    {
      firstName : 'Rushikesh',
      lastName : 'Wakchaure',
      userName : 'rushi',
      city : 'Pune',
      department : 'Developement' 
    },
    {
      firstName : 'Mayur',
      lastName : 'Gurav',
      userName : 'mayur8806',
      city : 'Pune',
      department : 'Finance' 
    },
    {
      firstName : 'Pravin',
      lastName : 'Deshmukh',
      userName : 'paravin2626',
      city : 'Pune',
      department : 'Civil' 
    },
    {
      firstName : 'Akshara',
      lastName : 'Jadhav',
      userName : 'akshara25',
      city : 'Pune',
      department : 'Developement' 
    },
    {
      firstName : 'Alok',
      lastName : 'S',
      userName : 'alok',
      city : 'Panjab',
      department : 'Civil' 
    },
    {
      firstName : 'Dummy',
      lastName : 'D',
      userName : 'dummy',
      city : 'Mumbai',
      department : 'Developement' 
    },
    {
      firstName : 'Ravi',
      lastName : 'W',
      userName : 'ravi123',
      city : 'Mumbai',
      department : 'IT' 
    },
    {
      firstName : 'John',
      lastName : 'Doe',
      userName : 'johnD',
      city : 'Miami',
      department : 'HR' 
    },
    {
      firstName : 'Sagar',
      lastName : 'Vaidya',
      userName : 'sagar',
      city : 'Nashik',
      department : 'Farma' 
    },
    {
      firstName : 'Vinod',
      lastName : 'W',
      userName : 'vinod2323',
      city : 'Pune',
      department : 'Sales' 
    },
    {
      firstName : 'Shehal',
      lastName : 'L',
      userName : 'snehal',
      city : 'Pune',
      department : 'QA' 
    },
    {
      firstName : 'Jyoti',
      lastName : 'K',
      userName : 'jyotik',
      city : 'Mumbai',
      department : 'Developement' 
    },
  ];

  public getUsers(){
    return this.users;
  }


  setUsers(obj) {
    this.users.push(obj);
  }
  
}
