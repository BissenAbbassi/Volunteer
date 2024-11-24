import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BlogComponent } from './blog/blog.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'account', component: AccountComponent },
];
