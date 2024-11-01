# Exposer

Exposer is an Angular application that allows users to upload images and reveal hidden metadata effortlessly. The application extracts and displays detailed metadata from uploaded images, including EXIF, IPTC, and XMP tags.

![Exposer Screenshot](./src/assets/screenshot.png)

## Features

- Upload multiple images at once
- Extract and display detailed metadata from images
- Display metadata in a readable format, including sub-tables for nested objects
- Show the total number of files processed and the time taken

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/kmesiab/metadata-exposer.git
   cd exposer
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the application:

   ```sh
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

1. Click the "Upload Images" button to select one or more images from your file system.
2. The application will extract and display metadata for each uploaded image.
3. Click "Show more metadata" to expand and view detailed metadata for each image.

## Project Structure

- `src/app/components/image-uploader/`: Contains the image uploader component.
- `src/app/services/metadata.service.ts`: Contains the service for extracting metadata from images.
- `src/assets/`: Contains static assets, including the screenshot image.

## Dependencies

- Angular
- exifr (for extracting metadata)
- Angular Material (for UI components)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
