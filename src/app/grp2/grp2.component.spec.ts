import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grp2Component } from './grp2.component';

describe('Grp2Component', () => {
  let component: Grp2Component;
  let fixture: ComponentFixture<Grp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
