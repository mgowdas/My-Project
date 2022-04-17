import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinldComponent } from './joinld.component';

describe('JoinldComponent', () => {
  let component: JoinldComponent;
  let fixture: ComponentFixture<JoinldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
