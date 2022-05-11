import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/resources/models/RequestLogin';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LoginService } from 'src/app/resources/services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})


export class CadastroComponent implements OnInit {

  public requestCadastro: RequestLogin;

  constructor(
    private loginService: LoginService,
    private alertService: AlertService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.requestCadastro = new RequestLogin();
  }

  public cadastrar(){

    if(this.requestCadastro.email == null || this.requestCadastro.senha == null) {
      console.log(this.requestCadastro)
      this.alertService.error('Por favor preencher os campos')
    }
    else{
      this.loginService.cadastra(this.requestCadastro).subscribe(
        (sucesso) => {
          this.alertService.success('Email cadastrado com sucesso')
          console.log(sucesso)
        },
        (err) =>{
          this.alertService.error(err.error)
          console.log(err)
        }
      )
    }
  }
  public voltar() : void {
    this.router.navigate(['']);
  }


}
