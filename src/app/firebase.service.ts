import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {

  constructor(private firebase: AngularFireDatabase) { }
  peopleList: AngularFireList<any>;

  getPeoples() {
    this.peopleList = this.firebase.list('/users');
    return this.peopleList.snapshotChanges();
  }

}