import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { routes } from './app.routes';

describe('routes', () => {
    it('should contain a route for /users', () => {
        expect(routes).toContain({ path: 'users', component: UserComponent});
    });
});

describe('routes', () => {
    it('should contain a route for /not-found', () => {
        expect(routes).toContain({ path: 'not-found', component: NotFoundComponent});
    });
});
