import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdparlibComponent } from './thirdparlib.component';

describe('ThirdparlibComponent', () => {
  let component: ThirdparlibComponent;
  let fixture: ComponentFixture<ThirdparlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdparlibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdparlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
