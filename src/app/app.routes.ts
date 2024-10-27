import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';


export const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'header',component: HeaderComponent},
  {path: '',component: HomeComponent  },
  {path: 'calendar',component: CalendarComponent}
]
