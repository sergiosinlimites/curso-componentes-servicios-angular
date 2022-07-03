import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() imgText: string = '';
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>()
  imgSrc = 'https://www.w3schools.com/howto/img_avatar.png';
  errorInImg: boolean = false;
  imgDefault = 'https://raw.githubusercontent.com/platzi/angular-componentes/2-step/src/assets/images/default.png';
  constructor() {
    // before render
    // no async
    // one time
    console.log('constructor', this.imgText)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // before render
    // many times
    // for view input changes
    console.log('onchanges', this.imgText)
  }

  ngOnInit(): void {
    // before render
    // allows async - fetch
    // one time
    console.log('oninit', this.imgText)
  }

  ngAfterViewInit(): void {
    // after render
    // handles children
    console.log('afterviewinit', this.imgText)
  }

  ngOnDestroy(): void {
    // delete the component
    console.log('destroy', this.imgText)
  }

  imgError(){
    this.imgText = this.imgDefault;
  }

  imgLoaded(){
    this.loaded.emit('Se cargó');
  }
}
