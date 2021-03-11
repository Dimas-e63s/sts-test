import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './header/header.component'
import { ModalComponent } from './modal/modal.component'
import { BrewersPipe } from './shared/pipes/brewers.pipe'
import { FilterPipe } from './shared/pipes/filter.pipe'
import { ColumnComponent } from './column/column.component'
import { ChunkPipe } from './shared/pipes/chunk.pipe'
import { ItemModalComponent } from './item-modal/item-modal.component'
import { MaterialModule } from './shared/material/material.module'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    ColumnComponent,
    ItemModalComponent,
    BrewersPipe,
    FilterPipe,
    ChunkPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
