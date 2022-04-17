import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grp3Component } from './grp3.component';

describe('Grp3Component', () => {
  let component: Grp3Component;
  let fixture: ComponentFixture<Grp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
