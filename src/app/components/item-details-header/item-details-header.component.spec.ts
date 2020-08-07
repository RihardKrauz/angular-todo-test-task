import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsHeaderComponent } from './item-details-header.component';

describe('ItemDetailsHeaderComponent', () => {
  let component: ItemDetailsHeaderComponent;
  let fixture: ComponentFixture<ItemDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
