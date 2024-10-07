// import {
//     BlobClient,
//     BlobDownloadHeaders,
//     BlobGetPropertiesHeaders,
//     BlobGetPropertiesResponse,
//     BlockBlobClient,
//     ContainerClient
// } from '@azure/storage-blob';


// async function setBlobMetadata(
//     blobClient: BlobClient,
//     metadata: Metadata
//   ): Promise<void> {
//     /*
//       metadata= {
//           reviewedBy: 'Bob',
//           releasedBy: 'Jill',
//       }
//   */
//     const metadataResults = await blobClient.setMetadata(metadata);
  
//     if (!metadataResults.errorCode) {
//       console.log(`metadata set successfully ${metadataResults.date}`);
//     }
//   }