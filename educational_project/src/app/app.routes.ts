import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StuffComponent } from './components/stuff/stuff.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: HomeComponent},
    {path:"about", component: AboutComponent},
    {path:"courses", component: CoursesComponent},
    {path:"stuff", component: StuffComponent},
    {path:"contact", component: ContactComponent},

];
