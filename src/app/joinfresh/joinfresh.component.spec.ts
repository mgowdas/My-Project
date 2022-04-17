import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinfreshComponent } from './joinfresh.component';

describe('JoinfreshComponent', () => {
  let component: JoinfreshComponent;
  let fixture: ComponentFixture<JoinfreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinfreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinfreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
