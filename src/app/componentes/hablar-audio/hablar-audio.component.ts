import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { SpeechReconocimientotService } from 'src/app/services/speech-reconocimientot.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-hablar-audio',
  templateUrl: './hablar-audio.component.html',
  styleUrls: ['./hablar-audio.component.scss']
})

export class HablarAudioComponent implements OnInit {
  
  @Output() cerrarModal= new EventEmitter<void>();
  public grabando = false;
  public mostrarOpciones = false;
  public mensajeVoz!:string;
  public mostrarTexto:boolean=false;

  constructor(
    private speech:SpeechReconocimientotService) { }

  ngOnInit(): void {
    this.speech.initialize('es-ES')
  }

  toggleGrabacion():void {
    this.grabando = !this.grabando;
    this.mostrarOpciones = !this.grabando; // Ocultar las opciones si se inicia la grabación
    //  INICIO DE GRABACION
    console.log('Inicio de grabacion')
    this.mostrarTexto=false;
    this.speech.start();
    this.speech.words$.subscribe((transcripcion:string)=>{
      this.mensajeVoz=transcripcion
    });
  }

  terminarGrabacion():void {
    console.log('Grabación terminada');
    this.grabando = false;
    this.mostrarOpciones = false;
    if(this.speech){
      this.speech.stop();
      this.mostrarTexto=true;
    }
  }

  cancelarGrabacion():void {
    console.log('Grabación cancelada');
    this.grabando = false;
    this.mostrarOpciones = false;
    if(this.speech){
      this.speech.stop();
      this.mostrarTexto=true;
    }
  }

  cerrar():void{
    this.cerrarModal.emit();
  }  
}

