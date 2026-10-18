import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
selector: 'app-header',
standalone: true,
imports: [
RouterModule
],
templateUrl: './header.html',
styleUrl: './header.scss',
})
export class Header {

isNavOpen = false;

toggleNav(): void {
this.isNavOpen = !this.isNavOpen;
}

closeNav(): void {
this.isNavOpen = false;
}

}
