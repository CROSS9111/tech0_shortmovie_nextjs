import { NextResponse } from "next/server"
import { MsalService } from "../../msal"

// 認証用のURLを発行する
export async function GET() {
  const msalService = new MsalService()

  const {verifier, challenge, state} = await msalService.getCryptoCodeVerifier()
  const redirectURL = await msalService.getAuthCodeUrl(challenge, state)

  return NextResponse.json({redirect_url: redirectURL}, {status: 200, headers: {'Set-Cookie': `csrfToken=${verifier}`}})
}