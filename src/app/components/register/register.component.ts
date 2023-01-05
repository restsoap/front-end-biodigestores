import { generateForwardRef } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //para comprobar la contraseña 
  repeatPass: string = 'none';
  //para comprobar el correo electronico 
  displayMsg: string = '';
  isAccountCreated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required,
    Validators.minLength(2),
    Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("", [Validators.required,
    Validators.minLength(2),
    Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required,
    Validators.email]),
    mobile: new FormControl("", [Validators.required,
    Validators.pattern("[0-9]*"),
    Validators.minLength(10),
    Validators.maxLength(10)]),
    gender: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required,
    Validators.minLength(6),
    Validators.maxLength(15)]),
    rpwd: new FormControl("")
  });

  registerSubmited() {
    console.log(this.registerForm.get("firstname"));
    if (this.PWD.value == this.RPWD.value) {
      this.repeatPass = 'none'
      console.log(this.registerForm.value)
      this.authService.registerUser([
        this.registerForm.value.firstname,
        this.registerForm.value.lastname,
        this.registerForm.value.email,
        this.registerForm.value.mobile,
        this.registerForm.value.gender,
        this.registerForm.value.pwd

      ]).subscribe(res => {
        //console.log(res);
        if (res == 'Success'){
          this.displayMsg = 'Cuenta creada correctamente!.';
          this.isAccountCreated = true;
        } else if (res == 'Already Exist') {
          this.displayMsg = 'Esta cuenta ya existe. Intente con otro correo.';
          this.isAccountCreated = false;
        } else {
          this.displayMsg = 'algo salió mal.';
          this.isAccountCreated = false;
        }
        
      })

    } else {
      this.repeatPass = 'inline'
    }
  }

  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }

  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }

  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }

  get PWD(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }

  get RPWD(): FormControl {
    return this.registerForm.get("rpwd") as FormControl;
  }

}
