import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Event } from '../shared/models';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../shared/firebase.service';

/**
 * Render a view of a event here
 */
@Component({

    selector: 'event-view',
    templateUrl: 'event-view.component.html',
})
export class EventViewComponent {
    event: Event;

    constructor(private route: ActivatedRoute, private eventService: FirebaseService<Event>, title: Title) {
        eventService.setup('/events/');

        // This calls .subscribe so we don't rely on the template for unrolling
        // the observable (which requires 2 components)
        route.params.subscribe(params =>
            eventService.get(params['id']).subscribe((event) => {
                this.event = event;
                title.setTitle(this.event.name);
            })
        );
    }
}
