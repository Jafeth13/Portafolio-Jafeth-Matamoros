import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { MenuComponent } from './menu/menu.component';
import { WorkComponent } from './work/work.component';
const routes: Routes = [{
      path: 'proyectos',
      component: WorkComponent,
      data: { title: 'Proyectos' }, 
    }, {
      path: 'habilidades',
      component: AboutMeComponent,
      data: { title: 'Acerca de mi' }, 
    }, {
      path: 'menu',
      component: MenuComponent,
      data: { title: 'Menu' }, 
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
