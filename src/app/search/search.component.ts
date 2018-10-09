import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchValue: string = "";
  results: any;

  constructor(public afs: AngularFirestore) {
  }

  search() {
    console.log('Search Value now: ' + this.searchValue);
    let self = this;
    self.results = self.afs.collection('/users', ref => 
    ref.orderBy('name')
    .startAt(this.searchValue).endAt(this.searchValue + "\uf8ff"))
    .valueChanges();
  }

}