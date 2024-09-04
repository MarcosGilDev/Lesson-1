import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {FirstLessonComponent} from './components/first-lesson/first-lesson.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstLessonComponent],
  template: `
    <app-first-lesson></app-first-lesson>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
