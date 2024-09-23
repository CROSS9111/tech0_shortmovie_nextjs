// export async function GET() {
//     const res = await fetch("https://httpbin.org/get", {
//       next: { revalidate: 60 }, // Revalidate every 60 seconds
//     })
//     const data = await res.json()
//     console.log("API response data:", data)
    
//     return Response.json(data)
// }

import { NextResponse } from 'next/server';
const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");
require("dotenv").config();

export async function GET() {
  try {
    console.log("Azure Blob storage v12 - JavaScript quickstart sample");

    const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

    if (!AZURE_STORAGE_CONNECTION_STRING) {
      throw new Error('Azure Storage Connection string not found');
    }

    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    const containerName = "outputs";
    const containerClient = blobServiceClient.getContainerClient(containerName);
    console.log("client start!")


    const blobs = [];
    for await (const blob of containerClient.listBlobsFlat()) {
      const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);
      blobs.push({
        name: blob.name,
        url: tempBlockBlobClient.url
      });
    }
    console.log(blobs)

    return NextResponse.json({ blobs });
  } catch (err: unknown){
      if (err instanceof Error) {
          console.error(`Error: ${err.message}`);
      } else {
          console.error('An unknown error occurred');
      }}

  // try {

  //   // Quick start code goes here

  //   // // Create the container
  //   // const createContainerResponse = await containerClient.create();
  //   // console.log(
  //   //   `Container was created successfully.\n\trequestId:${createContainerResponse.requestId}\n\tURL: ${containerClient.url}`
  //   // );

  //   // console.log('\nListing blobs...');

  //   // List the blob(s) in the container.
  //   for await (const blob of containerClient.listBlobsFlat()) {
  //     // Get Blob Client from name, to get the URL
  //     const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);

  //     // Display blob name and URL
  //     console.log(
  //       `\n\tname: ${blob.name}\n\tURL: ${tempBlockBlobClient.url}\n`
  //     );
  //   }

  // } catch (err: unknown){
  //   if (err instanceof Error) {
  //       console.error(`Error: ${err.message}`);
  //   } else {
  //       console.error('An unknown error occurred');
  //   }}
}

// main()
//   .then(() => console.log("Done"))
//   .catch((ex) => console.log(ex.message));