import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userAccType = 'none';

  //fake login logic
  public submitLogin(login: string, password: string) {
    if (login === 'user' && password === 'userpassword') {
      console.log('user logged in');
      sessionStorage.setItem('userAccType', 'user');
      this.userAccType = 'user';
      return 'user logged';
    } else if (login === 'admin' && password === 'adminpassword') {
      console.log('admin logged in');
      sessionStorage.setItem('userAccType', 'admin');
      this.userAccType = 'admin';
      return 'admin logged';
    }
    return 'wrong credentials';
  }

  public getUserAccType() {
    return this.userAccType;
  }

  public setUserAccType(userType: any) {
    return (this.userAccType = userType);
  }
}
