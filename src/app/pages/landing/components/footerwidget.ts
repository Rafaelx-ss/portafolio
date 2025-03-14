import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'footer-widget',
    imports: [RouterModule],
    template: `<div class="layout-footer">
        Portafolio de Rafael Solis by
        <a href="https://github.com/Rafaelx-ss" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Rafael Solis.</a>
    </div>`
})
export class FooterWidget {
    constructor(public router: Router) {}
}
