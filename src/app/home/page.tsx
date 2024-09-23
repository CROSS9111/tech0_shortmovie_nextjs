// ストリーミング用コード
import { Suspense } from 'react'
import { list } from '@vercel/blob'


export default function Page() {
  console.log("client")
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <VideoComponent fileName="my-video.mp4" />
    </Suspense>
  )
}

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  })
  // const { url } = blobs[0]
  const url = "https://jjiibgcm4uwn38yh.public.blob.vercel-storage.com/videoplayback-ULZ7L1hmsWgPOsNTlgB2jEuEtPwrvo.mp4"

  return (
    <div className="mt-24 flex justify-center">
    <video
      controls
      preload="none"
      aria-label="Video player"
      className="w-full max-w-md h-auto"
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}