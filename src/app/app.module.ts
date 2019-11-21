import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { HowWeMetComponent } from './howwemet/howwemet.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from "./image/image.component";
import { EventComponent } from "./event/event.component";
import { SlideshowModule } from '../../public_api';
import { CityComponent } from './city/city.component';
import { RsvpComponent } from "./rsvp/rsvp.component";
import { FaqModule } from "./help/faq.module";


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'howwemet',
        component: HowWeMetComponent
    },
    {
        path: 'image',
        component: ImageComponent
    },
    {
        path: 'city',
        component: CityComponent
    },
    {
        path: 'rsvp',
        component: RsvpComponent
    },
    {
        path: 'event',
        component: EventComponent
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HowWeMetComponent,
        HomeComponent,
        ImageComponent,
        EventComponent,
        CityComponent,
        RsvpComponent

    ],
    imports: [
        SlideshowModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        SampleModule,
        FaqModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
