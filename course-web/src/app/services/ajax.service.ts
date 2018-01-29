import { Injectable } from '@angular/core';
import { Headers, Http,RequestOptions,RequestMethod } from '@angular/http';
//import {EmitterService} from '../services/emitter.service'
let headers = new Headers({'Content-Type': 'application/json'});
@Injectable()
export class AjaxService {

  constructor(private http: Http,
//  private _emitterService:EmitterService
  ) { }

AjaxCall(url:string,callback) {   
   var thisObj = this;
  // this._emitterService.setLoader(true)
      this.http.get(url)
      .subscribe(
      (data) => {
        var res = data.json();//For Success Response        
      //   thisObj._emitterService.setLoader(false)
          callback(res);
      },
      err => { console.error("ERRR_____________________" + err) } //For Error Response
      );
}

}

