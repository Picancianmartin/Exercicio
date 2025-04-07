import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {path: '', redirectTo: 'menu', pathMatch: 'full'},
    {path: 'menu', component:MenuComponent},
    {path: 'login', component: LoginComponent},
    {path: 'perfil/:email', component: PerfilComponent},
    

];
