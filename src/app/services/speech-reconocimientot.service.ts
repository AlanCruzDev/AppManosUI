import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpeechReconocimientotService {

  public recognition!: SpeechRecognition;
  public language!: string;
  public isListening = false;
  private wordsSubject: Subject<string> = new Subject<string>();
  public words$: Observable<string> = this.wordsSubject.asObservable();

  constructor(private zone:NgZone) {}

  initialize(language: string): void {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.setLanguage(language);
  }

  setLanguage(language: string): void {
    this.language = language;
    this.recognition.lang = language;
  }

  start(): void {
    this.recognition.start();
    this.isListening = true;
    if(this.isListening){
      this.recognition.onresult=(ev: SpeechRecognitionEvent) =>{
        const transciption=Array.from(ev.results)
        .map((value: SpeechRecognitionResult) => value[0])
        .map((value: SpeechRecognitionAlternative) => value.transcript).join('');
        
        
        this.zone.run(()=>{
          this.wordsSubject.next(transciption)
        });
      };
      this.recognition.onspeechend=()=>{
        this.zone.run(()=>{
          this.isListening=false;
        })
      }
    }
  }
  stop(): void {
    this.recognition.stop();
  }
  reset():void{
    if(this.recognition){
      this.recognition.abort();
      this.wordsSubject.next('')
    }
  }
  
}
