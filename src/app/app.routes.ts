import { Routes } from '@angular/router';
import { GlMpComponent } from './gl-mp/gl-mp.component';
import { PltMpComponent } from './plt-mp/plt-mp.component';

export const routes: Routes = [
    {path:'gl-mp', component: GlMpComponent, pathMatch:'full'},
    {path:'plt-mp', component: PltMpComponent, pathMatch:'full'},
];
