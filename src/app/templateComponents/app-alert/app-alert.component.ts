
import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';



@Component({   
   moduleId: module.id,
   selector: 'app-alert',
   templateUrl: 'app-alert.component.html'
})

export class AppAlertComponent {
    private subscription: Subscription;
    message: any;

   constructor(private alertService: AlertService) { }

   ngOnInit() {
       this.alertService.getMessage().subscribe(message => { this.message = message; });
   }

   ngOnDestroy(): void {
       if(this.subscription === undefined){

       }
       else{
            this.subscription.unsubscribe();
       }
    
   }

   

   
}