import { Component } from '@angular/core';
import { MetadataService } from '../../services/metadata.service';

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {
  fileMetadataList: { name: string; metadata: any; previewUrl: string | null; expanded: boolean }[] = [];
  timeTaken: number = 0;
  memoryUsed: number = 0;

  constructor(private metadataService: MetadataService) {}

  async onFileSelected(event: Event) {
    console.log('onFileSelected');

    const input = event.target as HTMLInputElement;
    const files: FileList | null = input.files;

    if (files) {
      const startTime = performance.now();
      const initialMemory = this.getMemoryUsage();
      this.fileMetadataList = [];
      for (let i = 0; i < files.length; i++) {
        console.log('Checking file...');
        const file = files.item(i);
        if (file) {
          const previewUrl = URL.createObjectURL(file);
          console.log(`File URL created: ${previewUrl}`);

          try {
            console.log('Extracting metadata...');
            const metadata = await this.metadataService.extractMetadata(file);
            console.log('Metadata:', metadata);
            this.fileMetadataList.push({ name: file.name, metadata, previewUrl, expanded: false });
          } catch (error) {
            console.error('Error extracting metadata:', error);
            this.fileMetadataList.push({ name: file.name, metadata: { error: 'Could not retrieve metadata' }, previewUrl, expanded: false });
          }
        }
      }
      const endTime = performance.now();
      const finalMemory = this.getMemoryUsage();
      this.timeTaken = endTime - startTime;
      this.memoryUsed = (finalMemory - initialMemory) / (1024 * 1024); // Convert bytes to MB
    } else {
      console.warn('No files selected.');
    }
  }

  getMemoryUsage(): number {
    if ('memory' in performance) {
      const memory = performance.memory as PerformanceMemory;
      return memory.usedJSHeapSize;
    }
    return 0;
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  getDisplayTitle(metadata: any): string {
    if (metadata.title) {
      return metadata.title.value || metadata.title;
    } else if (metadata.objectName) {
      return metadata.objectName;
    } else {
      return 'No Title';
    }
  }
}