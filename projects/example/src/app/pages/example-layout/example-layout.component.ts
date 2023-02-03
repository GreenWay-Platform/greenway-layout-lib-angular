import { Component } from '@angular/core';
import { GWSidebarItem } from 'projects/greenway/layout-core/src/public-api';

@Component({
  selector: 'app-example-layout',
  templateUrl: './example-layout.component.html',
  styleUrls: ['./example-layout.component.scss']
})
export class ExampleLayoutComponent {

  sidebarItems: Array<GWSidebarItem> = [
    { type: GWSidebarItem.TYPE_TITLE, title: 'HR', image: '/assets/img/icons-modules/035-contacts.svg' },
    { type: GWSidebarItem.TYPE_LINK, title: 'Internal Jobs Posting', path: '/hr/internal-jobs-posting', icon: 'work' },
    { type: GWSidebarItem.TYPE_LINK, title: 'PTO/VTO Requests', path: '/hr/pto-vto-requests', icon: 'flight' },
    { type: GWSidebarItem.TYPE_LINK, title: 'My surveys', path: '/hr/polls-surveys-employer', icon: 'poll' },
    { type: GWSidebarItem.TYPE_LINK, title: 'Messages from Herald', path: '/hr/messages-from-herald', icon: 'sms' },
    { type: GWSidebarItem.TYPE_LINK, title: 'Condolences Module', path: '/hr/condolences', icon: 'sentiment_very_dissatisfied' },
  ];
}
