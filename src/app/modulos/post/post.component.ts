import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  public isModalOpen:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  abrirModal(){
    this.isModalOpen=true;
  }
  cerrarModal(){
    this.isModalOpen=false;
  }



  
}
