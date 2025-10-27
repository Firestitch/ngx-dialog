import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { FS_DAILOG_CONFIG, DialogConfig, FsDialogModule } from 'fs-package';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FsFormModule } from '@firestitch/form';
import { FsLabelModule } from '@firestitch/label';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsScrollbarModule } from '@firestitch/scrollbar';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(CommonModule, BrowserModule, FormsModule, MatDialogModule, FsFormModule, FsLabelModule, FsDialogModule, FsExampleModule.forRoot(), FsMessageModule.forRoot(), FsScrollbarModule.forRoot()),
        {
            provide: FS_DAILOG_CONFIG,
            useValue: {
                mobileMode: 'full',
                mobileButtonPlacement: 'bottom',
            } as DialogConfig,
        },
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { floatLabel: 'auto', appearance: 'outline' },
        },
        provideAnimations(),
        provideRouter([
            {
                path: '',
                loadChildren: () => import("./app/invoices-example/invoices.module").then((m) => m.InvoicesModule),
            },
        ]),
    ]
})
  .catch(err => console.error(err));

