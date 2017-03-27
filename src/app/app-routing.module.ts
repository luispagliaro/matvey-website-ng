import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full'
            },
            {
                path: 'inicio',
                component: HomeComponent
                //loadChildren: 'app/home/home.module#HomeModule'
            },
            {
                path: 'banda',
                loadChildren: 'app/band/band.module#BandModule'
            },
            {
                path: 'discografia',
                loadChildren: 'app/discography/discography.module#DiscographyModule'
            },
            {
                path: 'fotos',
                loadChildren: 'app/photos/photos.module#PhotosModule'
            },
            {
                path: 'videos',
                loadChildren: 'app/videos/videos.module#VideosModule'
            },
            {
                path: 'reseñas',
                loadChildren: 'app/reviews/reviews.module#ReviewsModule'
            },
            {
                path: 'contacto',
                loadChildren: 'app/contact/contact.module#ContactModule'
            },
            {
                path: '**',
                component: PageNotFoundComponent
            },
        ],
            { preloadingStrategy: PreloadAllModules }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }