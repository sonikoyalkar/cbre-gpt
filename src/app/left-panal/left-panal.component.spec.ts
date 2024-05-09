import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPanalComponent } from './left-panal.component';

describe('LeftPanalComponent', () => {
  let component: LeftPanalComponent;
  let fixture: ComponentFixture<LeftPanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftPanalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeftPanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
