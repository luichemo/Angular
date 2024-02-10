// ocr.service.ts

import { Injectable } from '@angular/core';
import Tesseract from 'tesseract.js';

@Injectable({
  providedIn: 'root',
})
export class OcrService {
  performOCR(imageUrl: string): Promise<string> {
    return Tesseract.recognize(
      imageUrl,
      'eng'
    ).then(({ data: { text } }) => text);
  }
}
