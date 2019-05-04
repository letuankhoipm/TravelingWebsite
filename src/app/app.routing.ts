import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layouts/clients/clients.module#ClientsModule'
    },
    {
        path: 'login',
        loadChildren: './routes/login/login.module#LoginModule'
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: './layouts/admin/admin.module#AdminModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabled', preloadingStrategy: PreloadAllModules })
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }
