import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../services/countries.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countriesList:any[];
  countryName:any='';
  showCountryDetail:boolean=false;
  showComparedCountryDetails:boolean=false;
  countryDetail:any;
  comparedCountryDetails:any;

  constructor(private sService:CountriesService) { }

  ngOnInit() {

  }

  getCountryList(_countryName){
    this.sService.countryList(_countryName)
    .then(res =>{
      if(res){
        this.countriesList = res;
      }
    })
  }

  countryNameText(e){
    if(e && e.target && e.target.value && e.target.value!=""){
      this.getCountryList(e.target.value)
    }else{
      this.countriesList = [];
    }
  }

  clicked(e,details){
    if(e.target.tagName!=='BUTTON')
    if(details){
      this.countryDetail = details;
      this.showCountryDetail=true;
      this.countriesList = [];
    }
  }

  compare(e,data){
    if(e.target.tagName==='BUTTON' && data){
      this.comparedCountryDetails = data;
      this.showComparedCountryDetails = true;
      this.countriesList = [];
    }
  }

}
