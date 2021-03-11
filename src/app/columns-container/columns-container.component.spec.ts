import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsContainerComponent } from './columns-container.component';

describe('ColumnsContainerComponent', () => {
  let component: ColumnsContainerComponent;
  let fixture: ComponentFixture<ColumnsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
