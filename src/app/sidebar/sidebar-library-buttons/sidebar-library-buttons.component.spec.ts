import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLibraryButtonsComponent } from './sidebar-library-buttons.component';

describe('SidebarLibraryButtonsComponent', () => {
  let component: SidebarLibraryButtonsComponent;
  let fixture: ComponentFixture<SidebarLibraryButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarLibraryButtonsComponent]
    });
    fixture = TestBed.createComponent(SidebarLibraryButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
