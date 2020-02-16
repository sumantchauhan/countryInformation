import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from "./constant";


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }


  countryList(country_name): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(
        Constants.EndPoint["countryList"] +
          "name/" +
          country_name,
        {
          headers: new Headers({
            Accept: "application/json"
          })
        }
      )
        .then(response => response.json())
        .then(res => {
          if (res && res.length>0) {
            let result = res;
            result.map(item =>{
              item.flagUrl=Constants.EndPoint["flagApi"]+item.alpha2Code+'/flat/64.png'
            })
            resolve(result);
          }
        })
        .catch(e => {
          reject(e);
        });
    }) as Promise<any>;
  }


}
