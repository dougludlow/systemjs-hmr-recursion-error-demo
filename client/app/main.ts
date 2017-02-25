import './globals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../styles/styles.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);