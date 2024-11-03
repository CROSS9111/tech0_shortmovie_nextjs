'use client';
import { AuthenticationResult } from "@azure/msal-node"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

export default function Home() {
  const params = useSearchParams()
  const [state, setState] = useState({
    jwt: "",
  })
  // const [code, _] = useState(params.get("code"))
  const [code, _] = useState(params ? params.get("code") : null);


  useEffect(() => {
    if (!code) return; // codeがnullの場合はリクエストを行わない

    (async() => {
      // 認証をかける
      const url = "/api/auth/verify"
      const {data}: {data: AuthenticationResult} = await axios.post(url, {
        code
      })
      setState({jwt: data.accessToken})
    })()
  }, [code])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
      {state.jwt}
    </div>
    </Suspense>
  )
}