export async function GET() {
    const res = await fetch("https://httpbin.org/get", {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
    console.log("API response data:", data)
    
    return Response.json(data)
}