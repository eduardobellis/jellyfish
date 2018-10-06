import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

import { User } from './user.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  private retor: any;
  id: string;
  constructor(private route: ActivatedRoute) { 
  
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
  });
    console.log('User: ' + this.id);
  }

}
