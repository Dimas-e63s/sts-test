import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataService } from '../shared/data.service';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { ColumnsContainerComponent } from './columns-container.component';

describe('ColumnsContainerComponent', () => {
  let component: ColumnsContainerComponent;
  let fixture: ComponentFixture<ColumnsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnsContainerComponent],
      providers: [DataService],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display error message if error specified', () => {
    component.error = 'error';
    fixture.detectChanges();
    const errorBlock = fixture.debugElement.query(By.css('.wrapper'));
    const errorMessage = fixture.debugElement.query(By.css('h3'));
    const eMessageEl: HTMLElement = errorMessage.nativeElement;
    expect(errorBlock).toBeTruthy();
    expect(eMessageEl.textContent).toBe('error');
  });
});
