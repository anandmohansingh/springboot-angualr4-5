import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  providers : [DataService]
})
export class CourseDetailComponent implements OnInit {

  public id='';
  public coursDetails:any;
  constructor(private _route:ActivatedRoute,private _dataService:DataService) { }

  ngOnInit() {

      var thisObj = this;
     thisObj._route.params.subscribe(
      params => 
      { 
        this.id = params['courseName'];
        thisObj._dataService.getCourseDetails(this.id,(response)=>{
          thisObj.coursDetails = response;
        })
      })
  }

}
