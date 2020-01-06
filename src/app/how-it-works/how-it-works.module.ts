import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksRoutingModule } from './how-it-works-routing-module';
import { HowItWorksComponent } from './components/how-it-works.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        HowItWorksRoutingModule,
        SharedModule        
    ],
    declarations: [
        HowItWorksComponent, 
    ]
})

export class HowItWorksModule { }
