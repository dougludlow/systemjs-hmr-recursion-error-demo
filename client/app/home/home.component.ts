import { Component } from '@angular/core';

import * as template from './home.template.html';

@Component({
  template: template
})
export class HomeComponent { 
    name: string = "World";
}