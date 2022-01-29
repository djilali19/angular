import { Component, OnInit } from '@angular/core';
import { DjilaliService } from '../services/djilali.service';



@Component({
  selector: 'app-djilali',
  templateUrl: './djilali.component.html',
  styleUrls: ['./djilali.component.scss']
})
export class DjilaliComponent implements OnInit {

  

  name!:number[];
  flag!:string;
  createdDate!: Date;

  constructor(private DjilaliService: DjilaliService) { }

  ngOnInit(): void {
    this.name =  this.DjilaliService.getAllDjilali();
    this.flag = 'true';
    this.createdDate = new Date();
  }

}
