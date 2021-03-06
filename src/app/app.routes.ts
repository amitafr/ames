import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {MissionsComponent} from './missions/missions.component';
import {MissionListComponent} from './missions/mission-list.component';
import {MissionDetailComponent} from './missions/mission-detail.component';
import {MissionEditComponent} from './missions/mission-edit.component';
import {DevelopersComponent} from './developers/developers.component';
import {ExpertsComponent} from './developers/experts.component';
import {ExpertViewComponent} from './developers/expert-view.component';
import {ExpertEditComponent} from './developers/expert-edit.component';
import {EventsComponent} from './events/events.component';
import {EventSubmitComponent} from './events/event-submit.component';
import {EventEditComponent} from './events/event-edit.component';
import {EventViewComponent} from './events/event-view.component';
import {CommunitiesComponent} from './communities/communities.component';
import {CommunitySubmitComponent} from './communities/community-submit.component';
import {CommunityEditComponent} from './communities/community-edit.component';
import {CommunityViewComponent} from './communities/community-view.component';
import {LoginComponent} from './login.component';
import {ResourcesComponent} from './resources/resources.component';
import {ResourceEditComponent} from './resources/resource-edit.component';
import {ResourceQueueComponent} from './resources/resource-queue.component';
import {ResourceSubmitComponent} from './resources/resource-submit.component';
import {UserProfileComponent} from './users/user-profile.component';
import {UserProfileShortComponent} from './users/user-profile-short.component';
import {AdminComponent} from './admin.component';


export const routes: Routes = [
    {
        path: '',
        component: CommunitiesComponent,
    },
    {
        path: 'missions',
        component: MissionsComponent,
        children: [
            { path: '', component: MissionListComponent },
            { path: ':id', component: MissionDetailComponent },
            { path: ':id/edit', component: MissionEditComponent },
        ]
    },
    { path: 'all-developers', component: DevelopersComponent },
    { path: 'developers', component: ExpertsComponent },
    { path: 'developers/:id', component: ExpertViewComponent },
    { path: 'developers/:id/edit', component: ExpertEditComponent },
    { path: 'events', component: EventsComponent },
    { path: 'events/submit', component: EventSubmitComponent },
    { path: 'events/:id', component: EventViewComponent },
    { path: 'events/:id/edit', component: EventEditComponent },
    { path: 'communities', component: CommunitiesComponent, },
    { path: 'communities/submit', component: CommunitySubmitComponent },
    { path: 'communities/:id', component: CommunityViewComponent, },
    { path: 'communities/:id/edit', component: CommunityEditComponent },
    { path: 'login', component: LoginComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'resources/submit', component: ResourceSubmitComponent },
    { path: 'resources/queue', component: ResourceQueueComponent },
    { path: 'resources/:category/:subcategory/:id', component: ResourceEditComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'profile-short', component: UserProfileShortComponent },
    { path: 'admin', component: AdminComponent },
];
