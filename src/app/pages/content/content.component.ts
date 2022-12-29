import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://miro.medium.com/max/720/0*ziNf6Ao8VbShrzHM';
  contentHeadline:string = 'Meu Artigo';
  contentDescription: string = 'lorem ipsum';


  constructor(
    private route:ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get('id')));
  }

}
