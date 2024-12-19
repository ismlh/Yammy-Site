import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSideNavContentComponent } from './custom-side-nav-content.component';

describe('CustomSideNavContentComponent', () => {
  let component: CustomSideNavContentComponent;
  let fixture: ComponentFixture<CustomSideNavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSideNavContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSideNavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
