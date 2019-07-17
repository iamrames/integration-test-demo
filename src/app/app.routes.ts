import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes = [
    { path: 'users/:id', UserDetailsComponent},
    { path: 'users', component: UserComponent },
    { path: 'todos', component: TodosComponent },
    { path: '', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent}
];
