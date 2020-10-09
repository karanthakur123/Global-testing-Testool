import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup,FormControl,FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import {Yo} from '../auth/services/yo';

var companyname;
var location2;
var t=[];
@Component({
  selector: 'app-update-noise-second',
  templateUrl: './update-noise-second.component.html',
  styleUrls: ['./update-noise-second.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class UpdateNoiseSecondComponent implements OnInit {

  location1:string;
  com:string;
  testForm: FormGroup;
  data:object

  

  constructor(

    private fb: FormBuilder,
    private authService : AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {  
    
    this.activatedRoute.queryParams.subscribe(params => {
    var date_of_sampling=params['date_of_sampling'];
    var name_of_plant=params['name_of_plant'];
    var emission_source_monitored=params['emission_source_monitored'];
    var stack_details=params['stack_details'];
    var location_of_sampling_point=params['location_of_sampling_point'];
    var type_of_chimney=params['type_of_chimney'];
    var from_source_of_emission=params['from_source_of_emission'];

    var from_roof_level=params['from_roof_level'];
    var from_ground_level=params['from_ground_level'];
    var diameter_of_stack=params['diameter_of_stack'];
    var sampling_duration=params['sampling_duration'];
    var parameters_tested=params['parameters_tested'];
    var monitoring_purpose=params['monitoring_purpose'];
    var product_manufactured=params['product_manufactured'];

    var control_measures=params['control_measures'];
    var material_recovery=params['material_recovery'];
    var fugitive_emission=params['fugitive_emission'];
    var general_observation=params['general_observation'];
    var stack_temp=params['stack_temp'];
    var ambient_temp=params['ambient_temp'];
    var avg_stack_vel=params['avg_stack_vel'];


    var qant_of_emission=params['qant_of_emission'];
    var sampling_started=params['sampling_started'];
    var sampling_completed=params['sampling_completed'];
    var average_flowrate=params['average_flowrate'];
    var vol_air_sampled=params['vol_air_sampled'];
    var flowrate_of_gases=params['flowrate_of_gases'];
    var company_name=params['company_name'];
    var id=params['id']





    console.log("date_of_sampling "+date_of_sampling);
    console.log("name_of_plant "+name_of_plant);
    console.log("emission_source_monitored "+emission_source_monitored);
    console.log("stack_details "+stack_details);
    console.log("location_of_sampling_point "+location_of_sampling_point);
    console.log("type_of_chimney "+type_of_chimney);
    console.log("from_source_of_emission  "+from_source_of_emission);

    console.log("from_roof_level "+from_roof_level);
    console.log("from_ground_level "+from_ground_level);
    console.log("diameter_of_stack "+diameter_of_stack);
    console.log("sampling_duration "+sampling_duration);
    console.log("product_manufactured "+product_manufactured);
    console.log("parameters_tested "+parameters_tested);
    console.log("monitoring_purpose  "+monitoring_purpose);

    

    console.log("control_measures "+control_measures);
    console.log("material_recovery "+material_recovery);
    console.log("fugitive_emission "+fugitive_emission);
    console.log("general_observation "+general_observation);
    console.log("stack_temp "+stack_temp);
    console.log("ambient_temp "+ambient_temp);
    console.log("avg_stack_vel  "+avg_stack_vel);
   


    console.log("qant_of_emission "+qant_of_emission);
    console.log("sampling_started "+sampling_started);
    console.log("average_flowrate "+average_flowrate);
    console.log("sampling_completed "+sampling_completed);
    console.log("vol_air_sampled "+vol_air_sampled);
    console.log("flowrate_of_gases "+flowrate_of_gases);


    console.log("company_name "+company_name);
    console.log("sampling_started "+sampling_started);
    console.log("average_flowrate "+average_flowrate);
    console.log("sampling_completed "+sampling_completed);
    console.log("vol_air_sampled "+vol_air_sampled);
    console.log("flowrate_of_gases "+flowrate_of_gases);
    console.log("id "+id)
    

    t=[date_of_sampling,name_of_plant,emission_source_monitored,stack_details,location_of_sampling_point,type_of_chimney,from_source_of_emission,
      from_roof_level,from_ground_level,diameter_of_stack,sampling_duration,product_manufactured,parameters_tested,monitoring_purpose
      ,control_measures,material_recovery,fugitive_emission,general_observation,stack_temp,ambient_temp,avg_stack_vel
   ,qant_of_emission,sampling_started,average_flowrate,sampling_completed ,vol_air_sampled ,flowrate_of_gases,company_name,id];
    console.log(t);
    
 
    
  });
  let playerName: string;
   
    
  }
  
  

  ngOnInit(){
    this.data=t;
    this.onupdate_create();
    
  }
  onupdate_create() {
    this.testForm = this.fb.group({
      date_of_sampling:t[0],
      name_of_plant: t[1],
      emission_source_monitored:t[2],
      stack_details:t[3],
      location_of_sampling_point:t[4],
      type_of_chimney:t[5],
      from_source_of_emission:t[6],
      from_roof_level:t[7],
      from_ground_level:t[8],
      diameter_of_stack:t[9],
      sampling_duration:t[10],
      product_manufactured:t[11],
      parameters_tested:t[12],
      monitoring_purpose:t[13],
      control_measures:t[14],
      material_recovery:t[15],
      fugitive_emission:t[16],
      general_observation:t[17],
      stack_temp:t[18],
      ambient_temp:t[19],
      avg_stack_vel:t[20],
      qant_of_emission:t[21],
      sampling_started:t[22],
      average_flowrate:t[23],
      sampling_completed:t[24],
      vol_air_sampled:t[25],
      flowrate_of_gases:t[26],
      company_name:t[27],
      id:t[28]
 })
  }
  onupdate() {
    console.log("coming...")
    console.log('date_of_sampling is..'+this.testForm.get('date_of_sampling').value);
   
    this.authService.onupdate_test_second({
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
      product_manufactured:this.testForm.get('product_manufactured').value,
      

      parameters_tested: this.testForm.get('parameters_tested').value,
      monitoring_purpose: this.testForm.get('monitoring_purpose').value,
      control_measures:this.testForm.get('control_measures').value,
      material_recovery:this.testForm.get('material_recovery').value,
      fugitive_emission:this.testForm.get('fugitive_emission').value,
      general_observation:this.testForm.get('general_observation').value,




      stack_temp: this.testForm.get('stack_temp').value,
      ambient_temp: this.testForm.get('ambient_temp').value,
      avg_stack_vel:this.testForm.get('avg_stack_vel').value,
      qant_of_emission:this.testForm.get('qant_of_emission').value,
      sampling_started:this.testForm.get('sampling_started').value,
      average_flowrate:this.testForm.get('average_flowrate').value,


      sampling_completed: this.testForm.get('sampling_completed').value,
      vol_air_sampled: this.testForm.get('vol_air_sampled').value,
      flowrate_of_gases:this.testForm.get('flowrate_of_gases').value,
      company_name:this.testForm.get('company_name').value,


      id:this.testForm.get('id').value


    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/backend/dashboard');
        }
      }
    )
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  
  }

}
