import { Component,ViewChild, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  @ViewChild('carousel', {static : true}) myCarousel!: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  @ViewChild('carousel', {static : true}) myCarousel2!: NguCarousel<any>;
  carouselConfig2: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  @ViewChild('carousel', {static : true}) myCarousel3!: NguCarousel<any>;
  carouselConfig3: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }


single=
[{
  "name": "Full-stack",
  "value": 4
},
  {
    "name": "Backend",
    "value": 2
  }
];
  view: [number, number] = [300, 200];
  
 
  oso:any

  public carouselTileItems: Array<number> = [0, 1, 2,3,4,5];
  public carouselTiles: Array<string> = [
    '/assets/uefa.jpg','assets/1.png','assets/2.png','assets/3.png',
    'assets/coding.png',
    'assets/music.jpg',
    'assets/game.jpg',
    'assets/sendero.jpeg',
    
  ];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FFC300', '#000000', '#0ff'],
  };
  public carouselTileItems2: Array<number> = [0, 1, 2,3,4];


  constructor(private _cdr: ChangeDetectorRef) {
 
  }

  ngAfterViewInit() {
    this._cdr.detectChanges();
  }

  ngOnInit() {
    this.carouselTileItems.forEach(el => {
   //  this.carouselTileLoad(el);
    });

   
  }
  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
  };

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide:any) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }

  moveTo2(slide:any) {
    this.myCarousel2.moveTo(slide, !this.withAnim);
  }
}
