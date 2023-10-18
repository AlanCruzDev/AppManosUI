import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCrearComponent } from './post-crear.component';

describe('PostCrearComponent', () => {
  let component: PostCrearComponent;
  let fixture: ComponentFixture<PostCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
