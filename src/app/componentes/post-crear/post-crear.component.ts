import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-post-crear',
  templateUrl: './post-crear.component.html',
  styleUrls: ['./post-crear.component.scss']
})

export class PostCrearComponent implements OnInit {

  @Output() cerrarModal=new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public CerrarModal():void{
    this.cerrarModal.emit();
  }
}
