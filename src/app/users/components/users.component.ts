import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

import {MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


/**
 *  Data table with sorting, pagination, and filtering.
 */ 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns = ['firstName', 'lastName', 'userName', 'city', 'department'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  addUserForm: FormGroup;
  submitted = false;
 
  
  constructor(private people : UsersService, private formBuilder: FormBuilder) { 

    
  }

  ngOnInit() {

    this.addUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      userName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      department: ['', [Validators.required]],
    });


    const users: UserData[] = this.people.getUsers(); 

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    
  }

  // Validate form controls
  get f() { return this.addUserForm.controls; }

  onSubmit(){
    this.submitted = true;

    if(this.addUserForm.invalid) {
      return;
    }

    let objParams = {
      firstName: this.addUserForm.get('firstName').value,
      lastName: this.addUserForm.get('lastName').value,
      userName: this.addUserForm.get('userName').value,
      city: this.addUserForm.get('city').value,
      department: this.addUserForm.get('department').value,
    }

    
    this.people.setUsers(objParams);

    const users: UserData[] = this.people.getUsers(); 

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.addUserForm.reset();


  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

/** Constants used to fill up our data base. */

export interface UserData {
  firstName: string;
  lastName: string;
  userName: string;
  city: string;
  department: string;
}
