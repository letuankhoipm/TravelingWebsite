import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  isEmailValidated: boolean = false;
  email = '';
  password = '';
  error = false;
  loading;

  constructor(
    private afAuth: AngularFireAuth,
    public router: Router
  ) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let result = re.test(String(email).toLowerCase());
    this.isEmailValidated = result;
    return result;
  }

  emailLogin() {
    this.loading = true;
    return this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.loading = false;
        this.router.navigate(['/admin']);

      })
      .catch(error => {
        this.loading = false;
        this.error = true;
      });
  }

  ngOnInit() {
  }

}
