import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {
  isSidebarPinned = false;
  isSidebarToggeled = false;

 

  constructor(private http: HttpClient) {}
  toggleSidebar() {
    this.isSidebarToggeled = !this.isSidebarToggeled;
  }

  public toggleSidebarPin() {
    this.isSidebarPinned = !this.isSidebarPinned;
  }

  public getSidebarStat() {
    return {
      isSidebarPinned: this.isSidebarPinned,
      isSidebarToggeled: this.isSidebarToggeled,
    };
  }

}
