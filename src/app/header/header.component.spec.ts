import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;

  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        imports: [MatDialogModule, NoopAnimationsModule, MatToolbarModule],
        declarations: [HeaderComponent],
      }).compileComponents();
      fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
    })
  );

  it('should load harness for dialog', () => {
    // const btn = fixture.debugElement.query(By.css('button'));
    // btn.triggerEventHandler('click', null);
    // const dialog = loader.getHarness(MatDialogHarness);
    // expect(dialog).toBeTruthy();
  });
});
