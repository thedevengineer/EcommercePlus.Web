import { Component, OnInit } from '@angular/core';
import { CardItem } from '../../Interface/cardItem';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 items:CardItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
