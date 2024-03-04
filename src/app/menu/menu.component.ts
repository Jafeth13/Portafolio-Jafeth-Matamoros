import { Component } from '@angular/core';
import Typed from 'typed.js';
import {NgxTypedJsModule} from 'ngx-typed-js';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  links: Array<LinkModel> = [
    {
      link: 'https://www.linkedin.com/in/jafeth-matamoros-cordero-b3738b198/',
      icon: '<i class="uil-linkedin"></i>'
    },
    {
      link: 'https://github.com/Jafeth13',
      icon: '<i class="uil uil-github-alt"></i>'
    },
    {
      link: 'mailto:jafeth1352001@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
  ];
  constructor() { }


  ngOnInit(): void {
    const options = {
      strings: ['Bienvenido a mi sitio web,vamos a conocer mi trabajo', 'Pura vida'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '',
      loop: true
 };
 const typed = new Typed('.typed-element', options);




    const options2 = {
      strings: ['Hola mi nombre es Jafeth Matamoros y soy Software Developer.',
      'Y me dedico principalmente al desarrollo de software a la medida.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '',
      loop: true
    };
const typed2 = new Typed('.typed-elementMy', options2);
  }


 

}


class LinkModel {
  link!: string;
  icon!: string;
}

