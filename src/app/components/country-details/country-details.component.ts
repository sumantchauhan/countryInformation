import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
 } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit,OnChanges {

  @Input() details;
  @Input() comparedDetails;
  currentDetails:any;
  secondCountryDetails:any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.details){
      this.currentDetails = changes.details.currentValue;
    }else if(changes && changes.comparedDetails){
      this.secondCountryDetails = changes.comparedDetails.currentValue
    }
  }

}
