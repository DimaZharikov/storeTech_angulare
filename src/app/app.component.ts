import {Component, OnInit} from '@angular/core';
import * as data from '/src/app/files/baseData.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'storeTech';
  ngOnInit(): any{
    console.log(data);
  }
}
