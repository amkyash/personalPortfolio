import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ResponsiveDirective } from '../directives/responsive.directive';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  
})

export class BannerComponent {
  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit(): void {
    }
}
