import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent],
  imports: [RouterModule],
  exports: [SidebarComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
