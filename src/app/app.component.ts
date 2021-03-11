import { OverlayContainer } from '@angular/cdk/overlay'
import {
  AfterViewInit,
  HostBinding,
  OnDestroy,
  Renderer2,
  ViewChild,
  ElementRef,
  Component,
  OnInit,
} from '@angular/core'
import { Subscription } from 'rxjs'
import { DataService, responseData } from './data.service'
import { FilterService } from './filter.service'
import { UtilsService } from './shared/utils.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'sts-test'
  @ViewChild('cont') container: ElementRef
  @HostBinding('class') root
  data: responseData[]
  className: string = 'darkMode'
  error: string
  private darkModeSubscription: Subscription
  constructor(
    private dataService: DataService,
    private filterService: FilterService,
    private renderer: Renderer2,
    private overlay: OverlayContainer,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      (res) => {
        this.data = res
      },
      (error) => {
        this.error = error.message
      }
    )

    this.darkModeSubscription = this.filterService.isDarkMode.subscribe(
      (darkMode) => {
        darkMode ? this.toggleTheme('add') : this.toggleTheme('remove')
      }
    )
  }

  toggleTheme(mode: 'add' | 'remove') {
    this.renderer[`${mode}Class`](this.container.nativeElement, this.className)
    this.overlay.getContainerElement().classList[mode](this.className)
  }

  ngAfterViewInit() {
    const isDarkMode = this.utilsService.checkPropertyInLS(
      'filters',
      'isDarkMode',
      false
    )
    if (isDarkMode) {
      this.toggleTheme('add')
    }
  }

  ngOnDestroy() {
    this.darkModeSubscription.unsubscribe()
  }
}
