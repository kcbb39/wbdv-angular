import { Component, OnInit } from '@angular/core';
import {ModuleService} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
  }

}
