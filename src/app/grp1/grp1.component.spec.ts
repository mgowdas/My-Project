import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grp1Component } from './grp1.component';

describe('Grp1Component', () => {
  let component: Grp1Component;
  let fixture: ComponentFixture<Grp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
