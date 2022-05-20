import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  menuItems = [
    {path: '/', name: 'Accueil', children: []},
    {path: '/menu1', name: 'Menu1', children: []},
    {path: '/menu2', name: 'Menu2', children: []},
    {path: '/menu3', name: 'Menu3', children: [
      {path: '/menu3-child1', name: 'Menu3'}, 
      {path: '/menu3-child2', name: 'Menu3'}
    ]},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
