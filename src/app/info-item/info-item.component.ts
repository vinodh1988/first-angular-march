import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.css'
})

  export class InfoItemComponent implements OnInit {
    @Input('msg') message: string = '';
    alertTypes: string[] = ['alert alert-primary', 'alert alert-secondary', 'alert alert-success', 
      'alert alert-danger', 'alert alert-warning', 'alert alert-info', 
      'alert alert-light', 'alert alert-dark'];
    bootclass: string = this.alertTypes[0];
    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
    ngOnInit() {
     if(isPlatformBrowser(this.platformId)) {
        setInterval(() => {
          const currentIndex = this.alertTypes.indexOf(this.bootclass);
          const nextIndex = (currentIndex + 1) % this.alertTypes.length;
          this.bootclass = this.alertTypes[nextIndex];
        }
     ,10000)
    }
  }

  handleClick() {
    const currentIndex = this.alertTypes.indexOf(this.bootclass);
    const nextIndex = (currentIndex + 1) % this.alertTypes.length;
    this.bootclass = this.alertTypes[nextIndex];
  }
  }