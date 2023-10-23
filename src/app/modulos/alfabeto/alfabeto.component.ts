import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alfabeto',
  templateUrl: './alfabeto.component.html',
  styleUrls: ['./alfabeto.component.scss']
})
export class AlfabetoComponent implements OnInit {

  imagenesAssets:string[]=[
    '../../../assets/img-manos/seña-a.png',
    '../../../assets/img-manos/seña-b.png',
    '../../../assets/img-manos/seña-c.png',
    '../../../assets/img-manos/seña-e.png',
    '../../../assets/img-manos/seña-f.png',
    '../../../assets/img-manos/seña-g.png',
    '../../../assets/img-manos/seña-h.png',
    '../../../assets/img-manos/seña-i.png',
    '../../../assets/img-manos/seña-j.png',
    '../../../assets/img-manos/seña-k.png',
    '../../../assets/img-manos/seña-l.png',
    '../../../assets/img-manos/seña-m.png',
    '../../../assets/img-manos/seña-n.png',
    '../../../assets/img-manos/seña-ñ.png',
    '../../../assets/img-manos/seña-o.png',
    '../../../assets/img-manos/seña-p.png',
    '../../../assets/img-manos/seña-q.png',
    '../../../assets/img-manos/seña-r.png',
    '../../../assets/img-manos/seña-s.png',
    '../../../assets/img-manos/seña-t.png',
    '../../../assets/img-manos/seña-u.png',
    '../../../assets/img-manos/seña-v.png',
    '../../../assets/img-manos/seña-w.png',
    '../../../assets/img-manos/seña-x.png',
    '../../../assets/img-manos/seña-y.png',
    '../../../assets/img-manos/seña-z.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
