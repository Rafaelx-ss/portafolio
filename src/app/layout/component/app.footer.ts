import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    template: `<div class="layout-footer">
        Rafael Solis by
        <a href="https://github.com/Rafaelx-ss" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Rafael Solis,</a>
    </div>`
})
export class AppFooter {}
