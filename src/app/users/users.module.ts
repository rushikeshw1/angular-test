import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './components/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule       
    ],
    declarations: [
        UsersComponent, 
    ]
})

export class UsersModule { }
