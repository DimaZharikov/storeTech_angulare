import {Component, OnInit} from '@angular/core';
import {RequestDataService, ResponseCategoryType} from '../shared/request-data.service';

@Component({
  selector: 'app-category-part',
  templateUrl: './category-part.component.html',
  styleUrls: ['./category-part.component.scss']
})
export class CategoryPartComponent implements OnInit {

  constructor(public serviceData: RequestDataService) {
  }

  requestData: ResponseCategoryType[] = this.serviceData.data.categories;

  // ngOnInit(): void {
  //   this.serviceData.getData().subscribe(data => {
  //     this.requestData = data.categories;
  //   });
  // }
  ngOnInit(): void{}
}
