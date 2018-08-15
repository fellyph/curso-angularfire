import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Observable<any[]>;
  title = 'Angular fire';
  constructor(af: AngularFirestore) {
    this.data = af.collection('connected').valueChanges();
  }
}
