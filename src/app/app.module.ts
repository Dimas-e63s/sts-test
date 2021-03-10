import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { HeaderComponent } from './header/header.component'
import { ModalComponent } from './modal/modal.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSelectModule } from '@angular/material/select'
import { HttpClientModule } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card'
import { BrewersPipe } from './brewers.pipe'
import { MatListModule } from '@angular/material/list';
import { FilterPipe } from './filter.pipe';
import { ColumnComponent } from './column/column.component';
import { PerLitrePipe } from './per-litre.pipe'

@NgModule({
  declarations: [AppComponent, HeaderComponent, ModalComponent, BrewersPipe, FilterPipe, ColumnComponent, PerLitrePipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
