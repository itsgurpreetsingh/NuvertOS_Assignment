import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewCompoundComponent } from './addnew-compound.component';

describe('AddnewCompoundComponent', () => {
  let component: AddnewCompoundComponent;
  let fixture: ComponentFixture<AddnewCompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnewCompoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddnewCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
