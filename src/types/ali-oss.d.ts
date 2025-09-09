declare module 'ali-oss' {
  interface OSSOpts {
    region: string;
    accessKeyId: string;
    accessKeySecret: string;
    bucket: string;
    endpoint?: string;
  }

  interface PutObjectOptions {
    headers?: {
      [key: string]: string;
    };
  }

  interface PutObjectResult {
    name: string;
    url: string;
    res: {
      status: number;
      headers: { [key: string]: string };
    };
  }

  interface BucketInfo {
    bucket?: {
      name: string;
      region: string;
      creationDate: string;
    };
  }

  class OSS {
    constructor(options: OSSOpts);
    put(name: string, file: Buffer, options?: PutObjectOptions): Promise<PutObjectResult>;
    getBucketInfo(): Promise<BucketInfo>;
  }

  export = OSS;
}