import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
    {
      link:'https://www.instagram.com/jafeth13_/',
      icon:'<i class="uil-instagram"></i>' 
    },
    {
      link:'https://www.facebook.com/profile.php?id=100009640669159',
      icon:'<i class="uil-facebook"></i>' 
    },
    {
      link:'https://twitter.com/JafethMatamoro3?t=8O9uCtpliKwnScBJVPf0mA&s=09',
      icon:'<i class="uil-twitter"></i>' 
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }


 

}


class LinkModel {
  link!: string;
  icon!: string;
}


