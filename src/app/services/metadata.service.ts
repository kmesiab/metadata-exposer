import { Injectable } from '@angular/core';
import * as exifr from 'exifr';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor() { }

  async extractMetadata(file: File): Promise<any> {
    try {
      // Specify options to extract detailed metadata
      const options = {
        // EXIF tags
        exif: true,
        // IPTC tags
        iptc: true,
        // XMP tags
        xmp: true,
        // Additional tags
        tiff: true,
        icc: true,
        gps: true,
        // All tags
        all: true
      };

      const metadata = await exifr.parse(file, options);
      console.log('Metadata retrieved:', metadata);
      return metadata;
    } catch (error) {
      console.error('Error extracting metadata:', error);
      throw new Error('Could not retrieve metadata');
    }
  }
}