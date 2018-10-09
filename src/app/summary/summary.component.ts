import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage'


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  imgUrl: string = "";
  searchValue: string = "";
  results: any;
  id: string;
  constructor(private route: ActivatedRoute, public afs: AngularFirestore, public fileStorage: AngularFireStorage) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    var docRef = this.afs.collection('/users').doc(this.id);

    docRef.get().subscribe(doc => {
      if (doc.exists) {
        this.results = doc.data();
        console.log(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });


    let ret: string;
    this.fileStorage.storage.app.storage("gs://ciandt-jellyfish.appspot.com")
      .ref()
      .child('photos/' + this.id + '.jpg')
      .getDownloadURL().then(function (url) {
        if (url) {
          ret = url;
          console.log('url: ' + url);
        } else {
          console.log('url is undefinied');
        }
      }).then(() => {
        this.imgUrl = ret;
      });
  }
}
