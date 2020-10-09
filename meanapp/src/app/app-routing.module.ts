import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DEFAULT_ROUTES } from './routes/default.layout.routes';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { BACKEND_ROUTES } from './routes/backend.layout.routes';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth/auth.guard';
import { LocationComponent } from './location/location.component';
import { ReportComponent } from './report/report.component';
import { InsertTestComponent } from './insert-test/insert-test.component';
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
import { NoiseDetailsComponent } from './noise-details/noise-details.component';
import { ViewAboveDetailsComponent } from './view-above-details/view-above-details.component';
import { UpdateAboveNoiseDetailComponent } from './update-above-noise-detail/update-above-noise-detail.component';
import { WaterAboveDetailComponent } from './water-above-detail/water-above-detail.component';
import { LightAboveDetailComponent } from './light-above-detail/light-above-detail.component';
import { ViewWaterAboveDetailsComponent } from './view-water-above-details/view-water-above-details.component';
import { ViewAirAboveDetailsComponent } from './view-air-above-details/view-air-above-details.component';
import { ViewLightAboveDetailsComponent } from './view-light-above-details/view-light-above-details.component';
import { UpdateAboveWaterDetailComponent } from './update-above-water-detail/update-above-water-detail.component';
import { UpdateAboveLightDetailComponent } from './update-above-light-detail/update-above-light-detail.component';
import { ViewWaterComponent } from './view-water/view-water.component';
import { ViewAirComponent } from './view-air/view-air.component';
import { ViewLightComponent } from './view-light/view-light.component';

const routes: Routes = [
  {path:'', 
  component:DefaultLayoutComponent,
  children: DEFAULT_ROUTES},



  {path:'backend', component:BackendLayoutComponent,children:BACKEND_ROUTES},
  {
    path:'view_air_remarks',component:ViewAirComponent,
    canActivate: [AuthGuard]
    },
    {
      path:'view_water_remarks',component:ViewWaterComponent,
      canActivate: [AuthGuard]
      }
      ,
      {
        path:'view_light_remarks',component:ViewLightComponent,
        canActivate: [AuthGuard]
        },
  {
   path:'test',component:TestComponent,
   canActivate: [AuthGuard]
   },
  {
    path:'location',component:LocationComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'report',component:ReportComponent,
    canActivate:[AuthGuard]
  } ,{
    path:'insert_test',component:InsertTestComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'report-noise',component:ReportNoiseComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'location-light',component:LocationLightComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'report-light',component:ReportLightComponent,
    canActivate:[AuthGuard]
  }
  ,
  
  {
    path:'report-water',component:ReportWaterComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'location-water',component:LocationWaterComponent,
    canActivate:[AuthGuard]
  }
  ,  
  {
    path:'insert-noise',component:InsertNoiseComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:'insert-light',component:InsertLightComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:'insert-water',component:InsertWaterComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'noise-detail',component:NoiseDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'light-detail',component:LightDetialsComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:'update-noise',component:UpdateNoiseComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'noise-detail-2',component:NoiseDetailsSecondComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'update-detail-2',component:UpdateNoiseSecondComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'water-detail',component:WaterDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'update-water',component:UpdateWaterDetailComponent,
    canActivate:[AuthGuard]
  },
  
  
  {
    path:'update-light',component:UpdateLightDetailComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin-dashboard',component:AdminDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'noise_details',component:NoiseDetailsComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path:'noise_above_details',component:ViewAboveDetailsComponent,
    canActivate:[AuthGuard]
  },
  
  
  {
    path:'update_above_noise_details',component:UpdateAboveNoiseDetailComponent,
    canActivate:[AuthGuard]
  }
  ,
  
  
  {
    path:'update_above_water_details',component:UpdateAboveWaterDetailComponent,
    canActivate:[AuthGuard]
  }
  
  
  ,
  
  
  {
    path:'update_above_light_details',component:UpdateAboveLightDetailComponent,
    canActivate:[AuthGuard]
  }
 ,
  {
    path:'insert_water_above_details',component:WaterAboveDetailComponent,
    canActivate:[AuthGuard]
  },
  
  
  
  {
    path:'insert_light_above_details',component:LightAboveDetailComponent,
    canActivate:[AuthGuard]
  }

  ,
  {
    path:'water_above_details',component:ViewWaterAboveDetailsComponent,
    canActivate:[AuthGuard]
  }
  , 
  {
    path:'light_above_details',component:ViewLightAboveDetailsComponent,
    canActivate:[AuthGuard]
  },

  {path:'**',redirectTo:'404'},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TestComponent,]
