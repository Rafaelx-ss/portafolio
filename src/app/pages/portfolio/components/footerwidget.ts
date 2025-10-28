import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'footer-widget',
    imports: [RouterModule, TranslateModule],
    template: `<div class="layout-footer">
        {{ 'portfolio.footer.text' | translate }}
        <a href="https://github.com/Rafaelx-ss" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Rafael Solis.</a>
    </div>`
})
export class FooterWidget {
    constructor(public router: Router) {}
}
