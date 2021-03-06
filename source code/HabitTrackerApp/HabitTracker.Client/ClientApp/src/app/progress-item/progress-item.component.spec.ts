/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProgressItemComponent } from './progress-item.component';

let component: ProgressItemComponent;
let fixture: ComponentFixture<ProgressItemComponent>;

describe('progress-item component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProgressItemComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProgressItemComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});