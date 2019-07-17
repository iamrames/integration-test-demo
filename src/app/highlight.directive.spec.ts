import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { async } from 'q';

@Component({
    template: `
    <p highlight="cyan">First </p>
    <p highlight> Second </p>
    `
})
class DirectiveHostComponent {}


describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  let component: DirectiveHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
            DirectiveHostComponent,
            HighlightDirective
          ]
    });

    fixture = TestBed.createComponent(DirectiveHostComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should highlight the first element with cyan', () => {
     const de = fixture.debugElement.queryAll(By.css('p'))[0];

     expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the second element with the default color', () => {
    const de = fixture.debugElement.queryAll(By.css('p'))[1];
    const directive = de.injector.get(HighlightDirective);

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
 });
});
