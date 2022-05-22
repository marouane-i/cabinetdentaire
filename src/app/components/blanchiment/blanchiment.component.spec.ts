import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanchimentComponent } from './blanchiment.component';

describe('BlanchimentComponent', () => {
  let component: BlanchimentComponent;
  let fixture: ComponentFixture<BlanchimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlanchimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlanchimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
