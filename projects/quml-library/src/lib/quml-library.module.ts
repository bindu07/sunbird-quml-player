import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QumlLibraryComponent } from './quml-library.component';
import { McqComponent } from './mcq/mcq.component';
import { LayoutstripComponent } from './layoutstrip/layoutstrip.component';
import { SaComponent } from './sa/sa.component';
import { VsaComponent } from './vsa/vsa.component';
import { LaComponent } from './la/la.component';
import { QumlPlayerComponent } from './quml-player/quml-player.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [QumlLibraryComponent, McqComponent,
     LayoutstripComponent, SaComponent, SaComponent, VsaComponent, LaComponent, QumlPlayerComponent],
  imports: [
    BrowserModule,
    SlickCarouselModule
  ],
  exports: [QumlLibraryComponent, McqComponent, LayoutstripComponent, SaComponent, VsaComponent, LaComponent , QumlPlayerComponent]
})
export class QumlLibraryModule { }
