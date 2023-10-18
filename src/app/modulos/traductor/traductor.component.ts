import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.scss']
})
export class TraductorComponent implements OnInit {
  // latest snapshot
  public webcamImage!: WebcamImage;
  public isMenuOpen: boolean = false;
  public mostrarModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  accionMenu(accion: string): void {
    this.abrirModal();

    this.isMenuOpen=false;
  }

  abrirModal() {
    this.mostrarModal = true;
  }
  cerrarModal() {
    this.mostrarModal = false;

  }





}
