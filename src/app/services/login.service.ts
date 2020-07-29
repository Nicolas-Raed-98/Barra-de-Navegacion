import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn:'root'
})

export class LoginService {

  public loginSuccess: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private http:HttpClient) { }
login(data):Observable<any>{
  console.log("I am server")
  return this.loginSuccess.asObservable();
  //this.http.post(`${baseUrl}/loggin`, data);
}
  
}
  
