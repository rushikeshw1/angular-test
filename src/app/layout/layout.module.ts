import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule
    ],
    
})

export class LayoutModule { }
