import { Component, OnInit } from '@angular/core';
import routesConstants from "../../config/constants/routes.constants";

interface DrawerItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {

  public drawerItems: DrawerItem[] = [
    {name: 'Login', route: `${routesConstants.auth.auth}/${routesConstants.auth.login}`},
    {name: 'To-do List', route: `${routesConstants.todo.tasks}/${routesConstants.todo.todoList}`},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
