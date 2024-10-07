import { NextResponse,NextRequest } from 'next/server';
const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");
require("dotenv").config();


export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      // ファイルがない場合のレスポンス
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    
    console.log("Azure Blob storage v12 - JavaScript quickstart sample");
    const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

    if (!AZURE_STORAGE_CONNECTION_STRING) {
      throw new Error('Azure Storage Connection string not found');
    }
    // create connection
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    // containerName
    const containerName = "movies";
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // ファイル名にUUIDを付加して一意の名前を作成
    const blobName = `${uuidv1()}-${file.name}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // ファイルのバッファデータを取得
    const buffer = Buffer.from(await file.arrayBuffer());

    // メタデータを設定する（例えば、作成者やアップロード日時など）
    const metadata = {
      author: "YourName",
      uploadDate: new Date().toISOString(),
      description: "This is a sample video upload"
    };


    const uploadBlobResponse = await blockBlobClient.uploadData(buffer, {
      metadata: metadata // メタデータを追加
    });
    console.log(`Blob was uploaded successfully. requestId: ${uploadBlobResponse.requestId}`);

    return NextResponse.json({ message: 'File uploaded successfully', blobName });
  } catch (err: unknown){
      if (err instanceof Error) {
          console.error(`Error: ${err.message}`);
      } else {
          console.error('An unknown error occurred');
      }}
  }
  