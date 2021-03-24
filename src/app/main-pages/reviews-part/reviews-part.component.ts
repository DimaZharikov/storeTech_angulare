import {Component, OnInit} from '@angular/core';
import {RequestDataService, ResponseReviewType} from '../shared/request-data.service';

@Component({
  selector: 'app-reviews-part',
  templateUrl: './reviews-part.component.html',
  styleUrls: ['./reviews-part.component.scss']
})
export class ReviewsPartComponent implements OnInit {

  constructor(public serviceData: RequestDataService) {
  }

  requestData: ResponseReviewType[] = this.serviceData.data.reviews;

  // ngOnInit(): void {
  //   this.serviceData.getData().subscribe(data => {
  //     this.requestData = data.reviews;
  //   });
  // }
  ngOnInit(): any {
    return this.serviceData.getData().subscribe(data => {
      this.requestData = data.reviews;
    });
  }

}
