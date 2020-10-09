import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-insert-noise',
  templateUrl: './insert-noise.component.html',
  styleUrls: ['./insert-noise.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class InsertNoiseComponent implements OnInit {
  testForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(){
    this.onInsert_create();
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);

  }
  onInsert_create() {
    this.testForm = this.fb.group({
      date_of_sampling: [''],
      name_of_plant: [''],
      emission_source_monitored:[''],
      stack_details:[''],
      location_of_sampling_point:[''],
      company_name:[''],
      type_of_chimney:[''],
      from_source_of_emission:[''],

      from_roof_level:[''],
      from_ground_level:[''],
      diameter_of_stack:[''],
      sampling_duration:[''],
      parameters_tested:[''],
      monitoring_purpose:[''],
      product_manufactured:[''],
      control_measures:[''],
      material_recovery:[''],
      fugitive_emission:[''],
      general_observation	:[''],
      stack_temp:[''],
      ambient_temp:[''],
      avg_stack_vel:[''],
      qant_of_emission:[''],
      sampling_started:[''],
      sampling_completed:[''],
      average_flowrate:[''],
      vol_air_sampled:[''],
      flowrate_of_gases:['']
    


      
    })
  }

 
  onInsert() {
    console.log("coming...")
    this.authService.onInsert_test_noise({
      date_of_sampling: this.testForm.get('date_of_sampling').value,
      name_of_plant: this.testForm.get('name_of_plant').value,
      emission_source_monitored:this.testForm.get('emission_source_monitored').value,
      stack_details:this.testForm.get('stack_details').value,
      location_of_sampling_point:this.testForm.get('location_of_sampling_point').value,
      type_of_chimney:this.testForm.get('type_of_chimney').value,

      from_source_of_emission: this.testForm.get('from_source_of_emission').value,
      from_roof_level: this.testForm.get('from_roof_level').value,
      from_ground_level:this.testForm.get('from_ground_level').value,
      diameter_of_stack:this.testForm.get('diameter_of_stack').value,
      sampling_duration:this.testForm.get('sampling_duration').value,
      parameters_tested:this.testForm.get('parameters_tested').value,

      monitoring_purpose: this.testForm.get('monitoring_purpose').value,
      product_manufactured: this.testForm.get('product_manufactured').value,
      control_measures:this.testForm.get('control_measures').value,
      material_recovery:this.testForm.get('material_recovery').value,
      fugitive_emission:this.testForm.get('fugitive_emission').value,
      general_observation:this.testForm.get('general_observation').value,

      stack_temp: this.testForm.get('stack_temp').value,
      ambient_temp: this.testForm.get('ambient_temp').value,
      avg_stack_vel:this.testForm.get('avg_stack_vel').value,
      qant_of_emission:this.testForm.get('qant_of_emission').value,
      company_name:this.testForm.get('company_name').value,
      sampling_started:this.testForm.get('sampling_started').value,

      sampling_completed: this.testForm.get('sampling_completed').value,
      average_flowrate: this.testForm.get('average_flowrate').value,
      vol_air_sampled:this.testForm.get('vol_air_sampled').value,
      flowrate_of_gases:this.testForm.get('flowrate_of_gases').value,




    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/admin-dashboard');
        }
      }
    )
  }
  

}
