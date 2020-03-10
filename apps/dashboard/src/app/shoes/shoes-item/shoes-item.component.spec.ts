import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesItemComponent } from './shoes-item.component';

describe('ShoesItemComponent', () => {
  let component: ShoesItemComponent;
  let fixture: ComponentFixture<ShoesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
