// This shows a different way of testing a component, check about for a simpler one
import { SettingsService } from '../settings/settings.service';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
const routing = RouterModule.forRoot(routes);

@Component({selector: 'my-test', template: ''})
class TestComponent { }

describe('Home Component', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [routing, RouterModule, HttpClientModule],
      declarations: [HomeComponent, TestComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/'},
        SettingsService]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].children[0].tagName).toBe('DIV');
  });

});


