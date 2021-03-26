import {Component, OnInit, Pipe, ViewChild} from '@angular/core';
import {RequestDataService, ResponseLatestBlogType} from '../shared/request-data.service';


@Component({
  selector: 'app-latest-blog-part',
  templateUrl: './latest-blog-part.component.html',
  styleUrls: ['./latest-blog-part.component.scss']
})
export class LatestBlogPartComponent implements OnInit {

  constructor(public serviceData: RequestDataService) {
  }

  responseData: ResponseLatestBlogType[] = this.serviceData.data.latest_blog;

  // ngOnInit(): void {
  //   this.serviceData.getData().subscribe(data => {
  //     this.responseData = data.latest_blog;
  //   });
  // }
  ngOnInit(): void {}

}
