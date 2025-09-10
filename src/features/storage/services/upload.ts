export async function validateFile(file: File) {
  // Validate file type
  if (!file.type.startsWith('image/')) {
    throw new Error('Invalid file type. Please upload an image.');
  }

  // Validate file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    throw new Error('File too large. Maximum size is 10MB.');
  }

  return true;
}

export async function processFileUpload(file: File) {
  validateFile(file);
  
  return {
    success: true,
    message: 'File validated, ready for processing'
  };
}