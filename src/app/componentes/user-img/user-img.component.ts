import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.scss']
})
export class UserImgComponent implements OnInit {

  @Output()
  public pictureTaken = new EventEmitter<WebcamImage>();
   public showWebcam = true;
   public allowCameraSwitch = true;
   public multipleWebcamsAvailable = false;
   public deviceId!: string;
   public img_user!:string;
   public letra_user!:string;
   public width_web!: number;
   public height_web!: number;


   public videoOptions: MediaTrackConstraints = {
     // width: {ideal: 1024},
     // height: {ideal: 576}
   };
   public errors: WebcamInitError[] = [];

   private trigger: Subject<void> = new Subject<void>();
   private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();


   constructor() {
    this.onResize();

   }

   public ngOnInit(): void {
     WebcamUtil.getAvailableVideoInputs()
       .then((mediaDevices: MediaDeviceInfo[]) => {
         this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
       });
   }

   public triggerSnapshot(): void {
     this.trigger.next();
   }

   public toggleWebcam(): void {
     this.showWebcam = !this.showWebcam;
   }

   public handleInitError(error: WebcamInitError): void {
     this.errors.push(error);
   }

   public showNextWebcam(directionOrDeviceId: boolean|string): void {
     this.nextWebcam.next(directionOrDeviceId);
   }

   public handleImage(webcamImage: WebcamImage): void {
    this.img_user=webcamImage.imageAsDataUrl;
    console.info('received webcam image', webcamImage.imageAsDataUrl);
    // aqui vamos a llamar al socker
    /*this.socket.enviarFoto(this.img_user);
     //this.pictureTaken.emit(webcamImage);
    this.socket.getLetraDeciscion().subscribe(res =>{
      if(res !== undefined || res!== null){
        this.letra_user=res;
      }
     })*/
   }

   public cameraWasSwitched(deviceId: string): void {
     console.log('active device: ' + deviceId);
     this.deviceId = deviceId;
   }

   public get triggerObservable(): Observable<void> {
     return this.trigger.asObservable();
   }

   public get nextWebcamObservable(): Observable<boolean|string> {
     return this.nextWebcam.asObservable();
   }

   @HostListener('window:resize', ['$event'])
   onResize(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width_web = win.innerWidth;
    this.height_web = win.innerHeight;
  }
}
