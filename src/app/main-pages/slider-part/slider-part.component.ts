import { Component, OnInit } from '@angular/core';
import {RequestDataService, ResponseMainSliderType} from '../shared/request-data.service';

@Component({
  selector: 'app-slider-part',
  templateUrl: './slider-part.component.html',
  styleUrls: ['./slider-part.component.scss']
})
export class SliderPartComponent implements OnInit {

  constructor(public dataService: RequestDataService) {
  }
  public discount = 25;
  public defImgDiscount = 'https://bipbap.ru/wp-content/uploads/2017/12/13f788_988796e5ebff496fa049404600feab34_mv2-640x456.png';
  public requestData: ResponseMainSliderType[] = this.dataService.data.main_slider;
  // ngOnInit(): void {
  //   this.dataService.getData().subscribe(data => {
  //     this.requestData = data.main_slider;
  //   });
  // }
  ngOnInit(): void{}
}
