import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import {DashboardComponent} from './dashboard/dashboard.component';
// import {HeroesComponent} from './heroes/heroes.component';
// import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
	// {
	// 	path: '',
	// 	redirectTo: '/',
	// 	// component: DashboardComponent
	// 	pathMatch: 'full'
	// },
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	// {
	// 	path: 'dashboard',
	// 	component: DashboardComponent
	// },
	// {
	// 	path: 'detail/:id',
	// 	component: HeroDetailComponent
	// },
	// {
	// 	path: 'heroes',
	// 	component: HeroesComponent
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule]
})
export class AppRoutingModule {}
