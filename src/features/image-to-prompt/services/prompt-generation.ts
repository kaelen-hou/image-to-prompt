interface WorkflowParams {
  workflow_id: string;
  parameters: {
    img: {
      file_id: string;
    };
    promptType: string;
    userQuery: string;
  };
}

interface UploadResult {
  data: {
    id: string;
  };
}

export async function uploadFileToCoze(file: File): Promise<string> {
  const uploadFormData = new FormData();
  uploadFormData.append('file', file);

  const uploadResponse = await fetch(`${process.env.COZE_BASE_URL || 'https://api.coze.cn'}/v1/files/upload`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.COZE_API_TOKEN}`,
    },
    body: uploadFormData,
  });

  if (!uploadResponse.ok) {
    const errorText = await uploadResponse.text();
    throw new Error(`Upload failed: ${uploadResponse.status} ${errorText}`);
  }

  const uploadResult: UploadResult = await uploadResponse.json();
  return uploadResult.data.id;
}

export async function executeWorkflow(fileId: string, promptType: string, userQuery: string) {
  const workflowParams: WorkflowParams = {
    workflow_id: process.env.COZE_WORKFLOW_ID!,
    parameters: {
      img: {
        file_id: fileId
      },
      promptType,
      userQuery
    },
  };

  const workflowResponse = await fetch(`${process.env.COZE_BASE_URL || 'https://api.coze.cn'}/v1/workflow/run`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.COZE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(workflowParams),
  });

  if (!workflowResponse.ok) {
    const errorText = await workflowResponse.text();
    throw new Error(`Workflow failed: ${workflowResponse.status} ${errorText}`);
  }

  return await workflowResponse.json();
}