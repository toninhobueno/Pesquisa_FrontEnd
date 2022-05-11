import { TopicoData } from './../../resources/models/TopicoData';
import { LoginService } from 'src/app/resources/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  public dataSource : TopicoData;


  public value : any;
  constructor(
    private loginService: LoginService,
  ) {

  }

  ngOnInit(): void {
    this.dataSource = new TopicoData();
      this.loginService.geData(this.loginService.email,this.loginService.senha).subscribe(
        
        (valores) => {
          this.dataSource = valores;
          console.log(this.dataSource)
        },
        (httpError) => {
          console.log(httpError)
        }
        
      );
    }
  }

