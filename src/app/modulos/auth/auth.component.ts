import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  public formAuth!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router:Router) {
    }

  ngOnInit(): void {
    this.initialForm();
  }

  public enviarDatos():void{
    let url:string='sidebar';
    this.router.navigateByUrl(url,{
      state:{
        id_cliente:1
      }
    });
  }
  public initialForm() {
    this.formAuth = this.fb.group({
      user: ['', Validators.required],
      contrasenia: ['', [Validators.min(3)]]
    });
  }
}
