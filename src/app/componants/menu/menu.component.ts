import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";

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
  icon: "",
  url:"",
    sousMenu: [
      {
        id: '11',
        titer: "Vue General",
        icon: "",
        url:"",
      },
      {
        id: '12',
        titer: "Statistique",
        icon: "",
        url:"",
      }
    ]
  },
    {
      id: "2",
      titer: "Articles",
      icon: "",
      url:"",
      sousMenu: [
        {
          id: '13',
          titer: "Articles",
          icon: "",
          url:"",
        },
        {
          id: '14',
          titer: "Mouvement de stock",
          icon: "",
          url:"",
        }
      ]
    },
    {
      id: "3",
      titer: "Clients",
      icon: "",
      url:"",
      sousMenu: [
        {
          id: '15',
          titer: "Clients",
          icon: "",
          url:"",
        },
        {
          id: '16',
          titer: "Commades de Clients",
          icon: "",
          url:"",
        }
      ]
    },
    {
      id: "4",
      titer: "Fournisseurs",
      icon: "",
      url:"",
      sousMenu: [
        {
          id: '17',
          titer: "Fournisseurs",
          icon: "",
          url:"",
        },
        {
          id: '18',
          titer: "Commades de Fournisseurs",
          icon: "",
          url:"",
        }
      ]
    },
    {
      id: "5",
      titer: "Parametrages",
      icon: "",
      url:"",
      sousMenu: [
        {
          id: '19',
          titer: "Categories",
          icon: "",
          url:"",
        },
        {
          id: '20',
          titer: "Utilisateurs",
          icon: "",
          url:"",
        }
      ]
    }
  ];

  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  constructor() {
  }



}
