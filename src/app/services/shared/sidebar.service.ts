import { Injectable } from '@angular/core';

@Injectable()

export class SidebarService {
  menu: any = [
    {
      titulo: 'principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dasboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        // { titulo: 'Gráficas', url: '/graficas1' }
      ]
    }
  ];

  constructor() { }
}
