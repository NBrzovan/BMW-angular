import { INavigation } from './../../interfaces/i-navigaton';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations :[
    trigger('LogoShow',[
      transition(':enter',[
        style({
          opacity: "0"
        }),
        animate('1s')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private NavigationService: NavigationService) { }

  public navigation: INavigation[] = [];

  ngOnInit(): void {
    this.getNavigation();
  }

  getNavigation(): void {
    this.NavigationService.getAll().subscribe(data => {
      this.navigation = data;
    })
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      let element = document.querySelector('.nav') as HTMLElement;
      if (window.pageYOffset > 20) {
        element.classList.add('header-color');
      } else {
        element.classList.remove('header-color');
      }
    }
}
