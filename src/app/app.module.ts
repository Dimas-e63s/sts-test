import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HeaderModalComponent } from './header/header-modal/header-modal.component';
import { BrewersPipe } from './shared/pipes/brewers.pipe';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ColumnComponent } from './columns-container/column/column.component';
import { ChunkPipe } from './shared/pipes/chunk.pipe';
import { ColumnModalComponent } from './columns-container/column-modal/column-modal.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ColumnsContainerComponent } from './columns-container/columns-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderModalComponent,
    ColumnComponent,
    ColumnModalComponent,
    BrewersPipe,
    FilterPipe,
    ChunkPipe,
    ColumnsContainerComponent,
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
