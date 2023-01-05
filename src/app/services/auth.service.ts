import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseserverUrl = "http://localhost:5148/api/"

  jwtHelperService = new JwtHelperService();

  registerUser(usuario: Array<String>) {
    return this.http.post(
      this.baseserverUrl + "User/CreateUser",
      {
        FirstName: usuario[0],
        LastName: usuario[1],
        Email: usuario[2],
        Mobile: usuario[3],
        Gender: usuario[4],
        Pwd: usuario[5]
      }, {
      responseType: 'text'
    });
  }

  loginUser(loginInfo: Array<string>) {
    return this.http.post(this.baseserverUrl + 'User/LoginUser',
      {
        Email: loginInfo[0],
        Pwd: loginInfo[1],
      }, {
      responseType: 'text',
    }
    );
  }

  setToken(token: string) {
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem("access_token");
    const userInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;

    console.log(userInfo['gender']);
    console.log(userInfo);
    const data = userInfo ? {
      id: userInfo.id,
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      email: userInfo.email,
      mobile: userInfo.mobile,
      gender: userInfo.gender
    } : null;
    this.currentUser.next(data);
  }

  isLoggedin(): boolean{
    return localStorage.getItem("access_token") ? true : false;
  }

  removeToken(){
    localStorage.removeItem("access_token");
  }

}
