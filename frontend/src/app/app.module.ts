import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ForwardBtnComponent } from './components/forward-btn/forward-btn.component';
import { StepThreeComponent } from './pages/step-three/step-three.component';
import { MapComponent } from './components/map/map.component';
import { ThemesComponent } from './components/themes/themes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { IndexComponent } from './components/index/index.component';
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dimosReducer } from './store/reducers/dimos.reducer';
import { dimenReducer } from './store/reducers/dimen.reducer';
import { ResetBtnComponent } from './components/reset-btn/reset-btn.component';
import { themesReducer } from './store/reducers/themes.reducer';
import { selectedDimenReducer } from './store/reducers/dimenSelected.reducer';
import { selectedThemesReducer } from './store/reducers/themesSelected.reducer';
import { indexReducer } from './store/reducers/index.reducer';
import { selectedTabReducer } from './store/reducers/selectedTab.reducer';
import { CompositeIndexComponent } from './components/composite-index/composite-index.component';
import { ResultsComponent } from './pages/results/results.component';
import { resultsReducer } from './store/reducers/results.reducer';
import { DivisionIndexComponent } from './components/division-index/division-index.component';
import { SortPipe } from './pipes/sort.pipe';
import { BackwardBtnComponent } from './components/backward-btn/backward-btn.component';
import { PdfExportComponent } from './components/pdf-export/pdf-export.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { VersionService } from './services/version.service';

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    StepTwoComponent,
    HeaderComponent,
    HomeComponent,
    ForwardBtnComponent,
    StepThreeComponent,
    MapComponent,
    ThemesComponent,
    IndexComponent,
    SubmitBtnComponent,
    ResetBtnComponent,
    CompositeIndexComponent,
    ResultsComponent,
    DivisionIndexComponent,
    SortPipe,
    BackwardBtnComponent,
    PdfExportComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({
      dimos: dimosReducer,
      dimen: dimenReducer,
      dimenSelected: selectedDimenReducer,
      themes: themesReducer,
      themesSelected: selectedThemesReducer,
      index: indexReducer,
      selectedTab: selectedTabReducer,
      results: resultsReducer,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [VersionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
