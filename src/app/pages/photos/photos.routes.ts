import { Routes } from "@angular/router";
import { PhotoResolver } from "../../core/resolvers/photo.resolver";

export const PhotosRoutes: Routes = [
    {   
        path: '',
        loadComponent: () => import('./list/list').then((component) => component.List),
        resolve: {
            photos: PhotoResolver
        }
    },
      {   
        path: ':photoId/detail',
        loadComponent: () => import('./detail/detail').then((component) => component.Detail)
    }
]