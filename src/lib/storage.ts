import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL, UploadResult } from 'firebase/storage';

// Upload with retry logic
async function uploadWithRetry(storageRef: any, fileData: ArrayBuffer, retries = 3): Promise<UploadResult> {
  for (let i = 0; i < retries; i++) {
    try {
      
      return await uploadBytes(storageRef, fileData);
    } catch (error) {
      
      if (i === retries - 1) throw error;
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
  throw new Error('Max retries reached');
}

export async function uploadFileToStorage(
  file: ArrayBuffer, 
  fileName: string, 
  contentType: string
): Promise<string> {
  try {
    
    
    // Create a unique filename with timestamp to avoid conflicts
    const timestamp = Date.now();
    const fileExtension = fileName.split('.').pop() || 'jpg';
    const storageFileName = `uploads/${timestamp}_${fileName.replace(/[^a-zA-Z0-9.-]/g, '_')}.${fileExtension}`;
    
    
    const storageRef = ref(storage, storageFileName);
    
    
    // Upload the file with retry logic
    
    const snapshot = await uploadWithRetry(storageRef, file);
    
    
    // Get the download URL
    
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    
    return downloadURL;
    
  } catch (error) {
    console.error('Firebase Storage upload failed:', error);
    console.error('Error details:', error);
    throw new Error('Failed to upload file to Firebase Storage');
  }
}