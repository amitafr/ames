import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Mission } from './models';
import { MissionService } from './shared/mission.service';
import { Observable } from 'rxjs';

@Component({
    moduleId: module.id,
    template: `<h2>Edit <a [routerLink]="['/missions/',id]">{{ mission?.name }}</a></h2>
     <form *ngIf="mission" (submit)="save()">
        <label><input [(ngModel)]="mission.name" placeholder="name"></label>
        <label></label>
       <!-- <div *ngIf="mission.startDate && mission.endDate">
            {{ mission.startDate}} - {{ mission.endDate}}
        </div>-->
    </form>
    `,
    directives: [ ROUTER_DIRECTIVES ],
    
})
export class MissionEditComponent {
    id : string;
    // Note that this doesn't match the detail component
    mission : Mission;
    
    constructor(private route : ActivatedRoute, private missionService : MissionService) {
        // Why is this an observable vs an object? :(
        route.params.subscribe(params => {
            this.id = params['id']; 
             missionService.getMission(this.id).subscribe(mission => this.mission = mission);
        }, params => {
            console.log("error", params);
        }, () => {
            console.log("finished");
        });
    }
    
    save() {
        //this.missionService.save(mission);
    }
    
}