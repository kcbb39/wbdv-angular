import {Component, Input, OnInit} from '@angular/core';
import {ModuleService} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  @Input() cid: string;
  @Input() selectModule;
  modules = [];

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.moduleService.findModulesForCourse(this.cid).then(modules => this.modules = modules);
  }

}
