import {Component, Input, OnInit} from '@angular/core';
import {LessonService} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  @Input() lessons;
  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
  }

}
