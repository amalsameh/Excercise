import { Component, Input } from '@angular/core';
@Component({
    selector: 'mypost',
    template: `<p>{{data.title}}</p>`
})
export class postsComponent {
    @Input() data: {
        userId: number,
        id: number,
        title: string,
        body: string
    };
}