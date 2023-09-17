import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  public menuProprties: Array<Menu> = [
    {
  id: "1",
  titer: "Tableau de bord",
  icon: "fa-solid fa-chart-pie",
  url:"",
    sousMenu: [
      {
        id: '11',
        titer: "Vue General",
        icon: "fa-solid fa-ranking-star",
        url:"",
      },
      {
        id: '12',
        titer: "Statistique",
        icon: "fa-solid fa-chart-line",
        url:"statistiques",
      }
    ]
  },
    {
      id: "2",
      titer: "Articles",
      icon: "fa-solid fa-boxes-stacked",
      url:"",
      sousMenu: [
        {
          id: '13',
          titer: "Articles",
          icon: "fa-solid fa-newspaper",
          url:"",
        },
        {
          id: '14',
          titer: "Mouvement de stock",
          icon: "fa-solid fa-layer-group",
          url:"",
        }
      ]
    },
    {
      id: "3",
      titer: "Clients",
      icon: "fa-solid fa-users",
      url:"",
      sousMenu: [
        {
          id: '15',
          titer: "Clients",
          icon: "fa-solid fa-users",
          url:"",
        },
        {
          id: '16',
          titer: "Commades de Clients",
          icon: "fa-solid fa-cart-shopping",
          url:"",
        }
      ]
    },
    {
      id: "4",
      titer: "Fournisseurs",
      icon: "fa-solid fa-people-roof",
      url:"",
      sousMenu: [
        {
          id: '17',
          titer: "Fournisseurs",
          icon: "fa-solid fa-people-roof",
          url:"",
        },
        {
          id: '18',
          titer: "Commades de Fournisseurs",
          icon: "fa-solid fa-truck-arrow-right",
          url:"",
        }
      ]
    },
    {
      id: "5",
      titer: "Parametrages",
      icon: "fa-solid fa-gears",
      url:"",
      sousMenu: [
        {
          id: '19',
          titer: "Categories",
          icon: "fa-solid fa-screwdriver-wrench",
          url:"",
        },
        {
          id: '20',
          titer: "Utilisateurs",
          icon: "fa-solid fa-user-gear",
          url:"",
        }
      ]
    }
  ];

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  constructor(
    private router: Router
  ) {}


  navigate(url?:string):void {
    this.router.navigate([url]);
  }
}
