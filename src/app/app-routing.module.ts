import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'button', loadChildren: './pages/button/button.module#ButtonPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'date-time', loadChildren: './pages/datetime/datetime.module#DatetimePageModule' },
  { path: 'ion-fab', loadChildren: './pages/ion-fab/ion-fab.module#IonFabPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'infinite-scroll', loadChildren: './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'list-sliding', loadChildren: './pages/list-sliding/list-sliding.module#ListSlidingPageModule' },
  { path: 'list-reorder', loadChildren: './pages/list-reorder/list-reorder.module#ListReorderPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
