import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutServiceService } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed:boolean = true;
  

  constructor(
    private appService:LayoutServiceService,
    private router:Router
    ) { }

  ngOnInit(): void {}
  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
  navegarPerfil(){
    this.router.navigate(['sidebar/perfil'])
    this.isCollapsed=!this.isCollapsed;
  }

}
