import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../shared/firebase.service';
import { AuthService } from '../shared/auth.service';
import { Mission } from '../shared/models';
import { Observable } from 'rxjs';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    moduleId: module.id,
    template: `<h2>Mission List</h2>

    <div style="clear:both;"></div>
    <md-card *ngFor="let mission of list | async" class="pretty-card" [routerLink]="['/missions/',mission.$key]">
       <div style="display:flex;">
            <div style="flex-grow:1;">
            
                <md-card-title>{{mission.name}}</md-card-title>
                <md-card-subtitle>{{mission.description}}</md-card-subtitle>
                <div>
                </div>
            </div>
            <div class="edit-button">
                <button *ngIf="auth.isAdmin | async" md-raised-button (click)="edit(mission)">Edit</button>
            </div>
        </div>
    </md-card>
    <form *ngIf="auth.isAdmin | async" (submit)="createMission()" style="clear:both;">
       <span class="adminIcon"></span> New Mission
        <input placeholder="name" [(ngModel)]="newMission.name"> 
        <button type="submit">Create</button>  
    </form>
    `,
    directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    
})
export class MissionListComponent implements OnInit {
    list : Observable<Mission[]>;
    newMission: Mission;
    constructor(private missionService : FirebaseService<Mission>, private auth : AuthService, private route : ActivatedRoute, private router: Router) {
    }
    ngOnInit() {
        this.missionService.setup('/missions/');
        this.list = this.missionService.list;
        this.newMission = new Mission();
    }
    createMission() {
        this.missionService.new(this.newMission);
        this.newMission = new Mission();
        
        // Take the user to their mission
        this.router.navigate(['./'], {relativeTo:this.route});
    }
    
    edit(mission) {
        this.router.navigate(["/missions/",mission.$key,'/edit'])
    }
    
}