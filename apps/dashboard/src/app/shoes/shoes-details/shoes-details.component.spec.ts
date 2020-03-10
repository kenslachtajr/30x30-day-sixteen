import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesDetailsComponent } from './shoes-details.component';

describe('ShoesDetailsComponent', () => {
  let component: ShoesDetailsComponent;
  let fixture: ComponentFixture<ShoesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
