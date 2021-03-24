import {Component, OnInit} from '@angular/core';
import {RequestData, RequestDataService, ResponseBrandType} from '../shared/request-data.service';
import * as datafile from '../../files/baseData.json';

@Component({
  selector: 'app-brands-part',
  templateUrl: './brands-part.component.html',
  styleUrls: ['./brands-part.component.scss']
})
export class BrandsPartComponent implements OnInit {


  constructor(public serviceData: RequestDataService) {
  }
  responseData: ResponseBrandType[] = this.serviceData.data.brands;

  // responseData: ResponseBrandType[] = [];
  // ngOnInit(): void {
  //   this.serviceData.getData().subscribe(data => {
  //     this.responseData = data.brands;
  //   });
  // }
  ngOnInit(): void {
  }


}
