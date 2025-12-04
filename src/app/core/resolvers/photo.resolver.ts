import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { PhotosService } from "../services/photos";

export const PhotoResolver: ResolveFn<Observable<any>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const photoService = inject(PhotosService);
    return photoService.getAll()
}