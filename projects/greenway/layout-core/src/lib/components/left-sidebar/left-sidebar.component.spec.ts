import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenwayLeftSidebarComponent } from './left-sidebar.component';

describe('GreenwayLeftSidebarComponent', () => {
  let component: GreenwayLeftSidebarComponent;
  let fixture: ComponentFixture<GreenwayLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenwayLeftSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreenwayLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
