import { OverlayContainer } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  HostBinding,
  OnDestroy,
  Renderer2,
  ViewChild,
  ElementRef,
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponseData } from './shared/data.service';
import { FilterService } from './shared/filter.service';
import { UtilsService } from './shared/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'sts-test';
  @ViewChild('cont') container: ElementRef;
  @HostBinding('class') root;
  data: ResponseData[];
  className = 'darkMode';
  error: string;
  private darkModeSubscription: Subscription;
  constructor(
    private filterService: FilterService,
    private renderer: Renderer2,
    private overlay: OverlayContainer,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.darkModeSubscription = this.filterService.isDarkMode.subscribe(
      (darkMode) => {
        darkMode ? this.toggleTheme('add') : this.toggleTheme('remove');
      }
    );
  }

  toggleTheme(mode: 'add' | 'remove'): void {
    this.renderer[`${mode}Class`](this.container.nativeElement, this.className);
    this.overlay.getContainerElement().classList[mode](this.className);
  }

  ngAfterViewInit(): void {
    const isDarkMode = this.utilsService.checkPropertyInLS({
      LSItem: 'filters',
      propName: 'isDarkMode',
      defVal: false,
    });
    if (isDarkMode) {
      this.toggleTheme('add');
    }
  }

  ngOnDestroy(): void {
    this.darkModeSubscription.unsubscribe();
  }
}
