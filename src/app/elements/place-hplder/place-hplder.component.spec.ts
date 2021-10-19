import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHplderComponent } from './place-hplder.component';

describe('PlaceHplderComponent', () => {
  let component: PlaceHplderComponent;
  let fixture: ComponentFixture<PlaceHplderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceHplderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHplderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
