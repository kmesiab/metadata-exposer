import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import the routes directly

// Bootstrap the application using the standalone AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync() // Use the imported routes directly
  ]
}).catch(err => console.error(err));
