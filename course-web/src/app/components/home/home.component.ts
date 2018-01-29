import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers : [DataService]
})
export class HomeComponent implements OnInit {

  public courses:any;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
var thisObj = this;
thisObj._dataService.getCourses((response)=>{
  thisObj.courses=response; 
 })
 
  }

}
