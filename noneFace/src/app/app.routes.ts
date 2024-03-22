import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AboutComponent } from './Components/about/about.component';
import { SubscriptionComponent } from './Components/subscription/subscription.component';
import { BarsComponent } from './Components/bars/bars.component';
import { AuthorizationComponent } from './Components/authorization/authorization.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: LandingPageComponent},
    {path:"about", component: AboutComponent},
    {path:"subscription", component: SubscriptionComponent},
    {path:"bars", component: BarsComponent},
    {path:"authorization", component: AuthorizationComponent},
];
