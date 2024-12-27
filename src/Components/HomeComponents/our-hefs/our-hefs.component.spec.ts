import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHefsComponent } from './our-hefs.component';

describe('OurHefsComponent', () => {
  let component: OurHefsComponent;
  let fixture: ComponentFixture<OurHefsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurHefsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurHefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
