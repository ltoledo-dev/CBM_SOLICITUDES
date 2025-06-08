import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import localeEsGt from '@angular/common/locales/es-GT';
import { registerLocaleData } from '@angular/common';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

registerLocaleData(localeEsGt, 'es-GT');
