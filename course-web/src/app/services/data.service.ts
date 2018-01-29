import { Component,Input,Output,Injectable,EventEmitter } from '@angular/core';
import {AjaxService} from '../services/ajax.service'
import { GlobalVariable } from '../../app/config';
@Injectable()
export class DataService {


  public BASE_URL = GlobalVariable.ACL_API_URL;
  constructor(private _ajaxService:AjaxService) { }







/**
 * @author Anand Singh
 * @description Get 1 course details 
 * @param courseId
 */

getCourseDetails(courseId,callback){
  var thisObj = this
 this._ajaxService.AjaxCall(this.BASE_URL+"courses/"+courseId,(result)=>
    { 
      callback(result);  
    })

}


/**
 * @author Anand Singh
 * @description Get courses  
 * @param courseId
 */

getCourses(callback){
  var thisObj = this
 this._ajaxService.AjaxCall(this.BASE_URL+"courses",(result)=>
    { 
      callback(result);  
    })

}

}
