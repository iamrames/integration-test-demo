import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [
        TodoService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should load todos from the server', fakeAsync(() => {
    const service = TestBed.get(TodoService);
    const todo = [1, 2, 3];
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(todo));
    fixture.detectChanges();

    tick();
    expect(component.todos.length).toEqual(3);
  }));
});
