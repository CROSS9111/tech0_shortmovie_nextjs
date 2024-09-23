'use client';
import { AuthenticationResult } from "@azure/msal-node"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const params = useSearchParams()
  const [state, setState] = useState({
    jwt: "",
  })
  const [code, _] = useState(params.get("code"))

  useEffect(() => {
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
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      {state.jwt}
    </div>
  )
}