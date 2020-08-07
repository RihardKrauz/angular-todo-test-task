import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActionsPanelComponent } from './page-actions-panel.component';

describe('PageActionsPanelComponent', () => {
  let component: PageActionsPanelComponent;
  let fixture: ComponentFixture<PageActionsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageActionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageActionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
