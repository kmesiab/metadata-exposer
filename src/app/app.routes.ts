import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

export const routes: Routes = [
  { path: '', component: ImageUploaderComponent },
];

@NgModule({
  declarations: [
    ImageUploaderComponent // Declare your component
  ],
  imports: [
    CommonModule, // Include CommonModule
    RouterModule.forRoot(routes),
    MatCardModule, // Import Material Card Module
    MatButtonModule, // Import Material Button Module
    MatIconModule, // Import Material Icon Module
    MatToolbarModule // Import Material Toolbar Module
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
