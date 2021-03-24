import { Component, OnInit } from '@angular/core';
import {RequestDataService, ResponseCategoryType, ResponsePropositionType} from '../shared/request-data.service';

@Component({
  selector: 'app-good-propositions-part',
  templateUrl: './good-propositions-part.component.html',
  styleUrls: ['./good-propositions-part.component.scss']
})
export class GoodPropositionsPartComponent implements OnInit {

  constructor(public dataService: RequestDataService ) { }

  requestData: ResponsePropositionType[] = this.dataService.data.good_propositions;
  // ngOnInit(): void {
  //   this.dataService.getData().subscribe(data => {
  //     this.requestData = data.good_propositions;
  //   });
  // }
  ngOnInit(): any {
    return this.dataService.getData().subscribe(data => {
      this.requestData = data.good_propositions;
    });
  }

}
