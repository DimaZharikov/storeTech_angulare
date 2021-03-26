import {Component, OnInit} from '@angular/core';
import {RequestDataService, ResponsePropositionType} from '../shared/request-data.service';

@Component({
  selector: 'app-new-propositions-part',
  templateUrl: './new-propositions-part.component.html',
  styleUrls: ['./new-propositions-part.component.scss']
})
export class NewPropositionsPartComponent implements OnInit {


  constructor(public dataService: RequestDataService) {
  }

  requestData: ResponsePropositionType[] = this.dataService.data.new_propositions;
  isOpenOptions = false;
  // ngOnInit(): void {
  //   this.dataService.getData().subscribe(data => {
  //     this.requestData = data.new_propositions;
  //   });
  // }
  ngOnInit(): any {}
  }
