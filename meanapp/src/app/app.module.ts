
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { httpInterceptorProviders } from './http-interceptors';
import { TestComponent } from './test/test.component';
import { LocationComponent } from './location/location.component';
import { ReportComponent } from './report/report.component';
import { InsertTestComponent } from './insert-test/insert-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportNoiseComponent } from './report-noise/report-noise.component';
import { LocationLightComponent } from './location-light/location-light.component';
import { ReportLightComponent } from './report-light/report-light.component';
import { ReportWaterComponent } from './report-water/report-water.component';
import { LocationWaterComponent } from './location-water/location-water.component';
import { InsertNoiseComponent } from './insert-noise/insert-noise.component';
import { InsertLightComponent } from './insert-light/insert-light.component';
import { InsertWaterComponent } from './insert-water/insert-water.component';
import { NoiseDetailComponent } from './noise-detail/noise-detail.component';
import { UpdateNoiseComponent } from './update-noise/update-noise.component';
import { NoiseDetailsSecondComponent } from './noise-details-second/noise-details-second.component';
import { UpdateNoiseSecondComponent } from './update-noise-second/update-noise-second.component';
import { LightDetialsComponent } from './light-detials/light-detials.component';
import { WaterDetailComponent } from './water-detail/water-detail.component';
import { UpdateWaterDetailComponent } from './update-water-detail/update-water-detail.component';
import { UpdateLightDetailComponent } from './update-light-detail/update-light-detail.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NoiseDetailsComponent } from './noise-details/noise-details.component';
import { ViewAboveDetailsComponent } from './view-above-details/view-above-details.component';
import { ViewWaterAboveDetailsComponent } from './view-water-above-details/view-water-above-details.component';
import { ViewAirAboveDetailsComponent } from './view-air-above-details/view-air-above-details.component';
import { ViewLightAboveDetailsComponent } from './view-light-above-details/view-light-above-details.component';
import { UpdateAboveNoiseDetailComponent } from './update-above-noise-detail/update-above-noise-detail.component';
import { UpdateAboveAirDetailComponent } from './update-above-air-detail/update-above-air-detail.component';
import { UpdateAboveWaterDetailComponent } from './update-above-water-detail/update-above-water-detail.component';
import { UpdateAboveLightDetailComponent } from './update-above-light-detail/update-above-light-detail.component';
import { WaterAboveDetailComponent } from './water-above-detail/water-above-detail.component';
import { LightAboveDetailComponent } from './light-above-detail/light-above-detail.component';
import { ViewWaterComponent } from './view-water/view-water.component';
import { ViewAirComponent } from './view-air/view-air.component';
import { ViewLightComponent } from './view-light/view-light.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent,
    TestComponent,
    LocationComponent,
    ReportComponent,
    InsertTestComponent,
    ReportNoiseComponent,
    LocationLightComponent,
    ReportLightComponent,
    ReportWaterComponent,
    LocationWaterComponent,
    InsertNoiseComponent,
    InsertLightComponent,
    InsertWaterComponent,
    NoiseDetailComponent,
    UpdateNoiseComponent,
    NoiseDetailsSecondComponent,
    UpdateNoiseSecondComponent,
    LightDetialsComponent,
    WaterDetailComponent,
    UpdateWaterDetailComponent,
    UpdateLightDetailComponent,
    AdminDashboardComponent,
    NoiseDetailsComponent,
    ViewAboveDetailsComponent,
    ViewWaterAboveDetailsComponent,
    ViewAirAboveDetailsComponent,
    ViewLightAboveDetailsComponent,
    UpdateAboveNoiseDetailComponent,
    UpdateAboveAirDetailComponent,
    UpdateAboveWaterDetailComponent,
    UpdateAboveLightDetailComponent,
    WaterAboveDetailComponent,
    LightAboveDetailComponent,
    ViewWaterComponent,
    ViewAirComponent,
    ViewLightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    httpInterceptorProviders,
   {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
