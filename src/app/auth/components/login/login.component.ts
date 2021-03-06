import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth:AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(user: string, pass: string){
        this.auth.login(user, pass).then( (data: any) => {
          localStorage.setItem("token", "1234");
          this.router.navigateByUrl('/home/products');
        } )
        .catch(err => alert(err.code));
  }

}
