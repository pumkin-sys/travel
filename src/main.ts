import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from "./environments/environment";
import Mapboxgl from "mapbox-gl";
import { enableProdMode } from "@angular/core";
import { AppModule } from './app/app.module';

Mapboxgl.accessToken =
	"pk.eyJ1IjoiYnJ5YW5oZXJyZXJhZGV2IiwiYSI6ImNremp6bG5mejBmMXkzMHFrMjZrYWdkdXYifQ.vbbJRkFbDoKo-NPwvQthGA";

    if (!navigator.geolocation) {
      alert("Navegador no soporta la Geolocation");
      throw new Error("Navegador no soporta la Geolocation");
    }

    if (environment.production) {
      enableProdMode();
    }Mapboxgl.accessToken =
      "pk.eyJ1IjoiYnJ5YW5oZXJyZXJhZGV2IiwiYSI6ImNremp6bG5mejBmMXkzMHFrMjZrYWdkdXYifQ.vbbJRkFbDoKo-NPwvQthGA";

    if (!navigator.geolocation) {
      alert("Navegador no soporta la Geolocation");
      throw new Error("Navegador no soporta la Geolocation");
    }

    if (environment.production) {
      enableProdMode();
    }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
