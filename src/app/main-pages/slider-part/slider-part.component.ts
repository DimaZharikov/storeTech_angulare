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
  requestData: ResponseMainSliderType[] = this.dataService.data.main_slider;
  // ngOnInit(): void {
  //   this.dataService.getData().subscribe(data => {
  //     this.requestData = data.main_slider;
  //   });
  // }
  ngOnInit(): any {
    return this.dataService.getData().subscribe(data => {
      this.requestData = data.main_slider;
    });
  }
}
