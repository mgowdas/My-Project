import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grp5Component } from './grp5.component';

describe('Grp5Component', () => {
  let component: Grp5Component;
  let fixture: ComponentFixture<Grp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
