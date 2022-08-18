import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  connectedUser: string = 'User';
  adminConnected = false;
  managerConnected = false;
  getConnected = false;
  constructor(private http: HttpClient) {}

  /**
   *
   * @param role
   * @returns
   */
  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(environment.hostUser + '/usersByRole/' + role);
  }

  /**
   *
   * @param user
   * @returns
   */
  registerUser(user: User): Observable<User> {
    return this.http.post<User>(environment.hostUser + '/registerUser', user);
  }

  public authenticate(form: FormGroup): Observable<any> {
    const payload = new HttpParams()
      .set('username', form.value.username)
      .set('password', form.value.password);
    // let userStr = user.username;
    // let passwordStr = user.password;
    //console.log(payload.toString);
    //console.log(this.http.post(environment.hostAuth, payload));

    return this.http.post(environment.hostAuth, payload);
  }

  getConnectedUser() {
    const jwt = new JwtHelperService();
    if (localStorage.length != 0) {
      let accessToken = String(localStorage.getItem('accessToken'));
      let decodedToken = jwt.decodeToken(accessToken);
      this.connectedUser = decodedToken.sub;
    }
    return this.connectedUser;
  }

  getManagerConnected() {
    const jwt = new JwtHelperService();
    if (localStorage.length != 0) {
      let accessToken = String(localStorage.getItem('accessToken'));
      let decodedToken = jwt.decodeToken(accessToken);
      let roles: string = decodedToken.roles;
      if (roles.includes('ROLE_MANAGER')) this.adminConnected = true;
    }
    return this.managerConnected;
  }

  getAdminConnected() {
    const jwt = new JwtHelperService();
    if (localStorage.length != 0) {
      let accessToken = String(localStorage.getItem('accessToken'));
      let decodedToken = jwt.decodeToken(accessToken);
      let roles: string = decodedToken.roles;
      if (roles.includes('ROLE_ADMIN')) this.adminConnected = true;
    }
    return this.adminConnected;
  }

  logout(){
    localStorage.clear();
  }

  checkConnected(){
    if (localStorage.length != 0) 
      this.getConnected = true;
    return this.getConnected;
  }
}
