import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HablarAudioComponent } from './hablar-audio.component';

describe('HablarAudioComponent', () => {
  let component: HablarAudioComponent;
  let fixture: ComponentFixture<HablarAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HablarAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HablarAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
