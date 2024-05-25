import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecompoundComponent } from './updatecompound.component';

describe('UpdatecompoundComponent', () => {
  let component: UpdatecompoundComponent;
  let fixture: ComponentFixture<UpdatecompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatecompoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatecompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
