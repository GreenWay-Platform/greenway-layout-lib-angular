import { Component, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { GWSidebarItem } from '../../entities/sidebar-item';

@Component({
  selector: 'greenway-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class GreenwayLeftSidebarComponent {

  @Input() items = new Array<GWSidebarItem>();
  @Input() isOpen = false;

  typeLink = GWSidebarItem.TYPE_LINK;
  typeTitle = GWSidebarItem.TYPE_TITLE;

  constructor(
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    /* this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isOpen = false;
      }
    }); */
  }

  close() {
    if (this.breakpointObserver.isMatched('(max-width: 960px)')) {
      this.isOpen = true;
    }
  }
}