import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from 'src/app/services/login.service';
import { LoginViewModel } from 'src/app/models/login-view-model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']

})
export class LogginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private loginService:LoginService, private router: Router ){}
     

ngOnInit() {
  this.initForm();
}

initForm(){
  this.formGroup = new FormGroup ({
    usuario: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

}
loginProces(){
  if(this.formGroup.valid){
    this.loginService.login(this.formGroup.value).subscribe(result=>{
      if(result){
        this.router.navigate(["home"])
     }else {
        alert(result.message);
      }
    })
  }

}

}






