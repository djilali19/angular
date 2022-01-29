import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page-id',
  templateUrl: './page-id.component.html',
  styleUrls: ['./page-id.component.scss']
})
export class PageIdComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  id! : number ;

  ngOnInit(): void {
    const djiId = +this.route.snapshot.params['id'];
    this.id = djiId;
  }

}
