import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntityDataService, EntityDefinitionService, EntityMetadataMap} from "@ngrx/data";
import {ToDoDataService} from "../../modules/to-do-list/store/to-do-data.service";
import {compareTodos} from "../../modules/to-do-list/utils";
import {Todo} from "../../modules/to-do-list/models/todo";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TasksStoreModule {

}
