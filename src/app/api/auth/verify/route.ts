import { NextRequest, NextResponse } from "next/server"
import { MsalService } from "../../msal"
import { serialize } from 'cookie'

function decodeJwt(token: string) {
  const base64Url = token.split('.')[1]; // ペイロード部分を取得
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export async function POST(request: NextRequest) {
  const msalService = new MsalService()
  const json = await request.json()
  const code = json.code as string
  console.log("fhviofahiohaioghvoishio",code)

  if (!code) {
    return NextResponse.json({error: "code is not found"}, {status: 400})
  }

  const verifier = request.cookies.get("csrfToken")?.value
  if (!verifier) {
    return NextResponse.json({error: "invalid request"}, {status: 400})
  }

  // const result = await msalService.acquireTokenByCode(code, verifier)
  // return NextResponse.json(result)

  try {
    const result = await msalService.acquireTokenByCode(code, verifier)
    const token = result.accessToken

    const decodedToken = decodeJwt(token);
    console.log(decodedToken);

    // トークンをクッキーに保存
    const tokenCookie = serialize('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600, // 1時間
      path: '/'
    })

    // レスポンスを作成
    const response = NextResponse.json({ success: true })
    response.headers.set('Set-Cookie', tokenCookie)

    return response
  } catch (error) {
    console.error('Token acquisition failed:', error)
    return NextResponse.json({error: "Token acquisition failed"}, {status: 500})
  }
}


// 1.	認証コードを取得: フロントエンドから code（認証コード）がサーバーに送信されます。
// 	•	code は、ユーザーがサインインした後に認証プロバイダ（例: Azure AD, Google, etc.）からフロントエンドに返される短期の認証コードです。
// 2.	アクセストークンの取得: サーバーサイドでこの code を用いて、アクセストークンを取得します。この処理は以下の部分で行われています。



// import { NextRequest, NextResponse } from "next/server";
// import { MsalService } from "../../msal";
// import { serialize } from "cookie";
// import { v4 as uuidv4 } from "uuid";
// // import { readrefreshtokenFromCosmosDB, updateToken } from "../../cosmos";
// import crypto from "crypto";

// // グローバル変数としてMSALサービスを保持
// let msalService: MsalService;

// // POSTメソッドの処理（リフレッシュトークンの管理を追加）
// export async function POST(request: NextRequest) {
//   // MSALサービスが未初期化なら初期化
//   if (!msalService) {
//     msalService = new MsalService();
//   }

//   const json = await request.json();
//   const code = json.code as string;
//   if (!code) {
//     return NextResponse.json({ error: "code is not found" }, { status: 400 });
//   }

//   const verifier = request.cookies.get("csrfToken")?.value;
//   if (!verifier) {
//     return NextResponse.json({ error: "invalid request" }, { status: 400 });
//   }

//   try {
//     const result = await msalService.acquireTokenByCode(code, verifier);

//     const token = result.accessToken;
//     const refreshToken = msalService.getRefreshToken();
//     if (!refreshToken) {
//       return NextResponse.json({ error: "refreshToken is not found" }, { status: 400 });
//     }

//     const tokenCookie = serialize("authToken", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV !== "development",
//       sameSite: "strict",
//       maxAge: 3600, // 1時間
//       path: "/",
//     });

//     // OIDを取得してリフレッシュトークンをCosmos DBに保存
//     const oid = result.account?.idTokenClaims?.oid ?? null;
//     const uuid = uuidv4();
//     if (oid) {
//       // await updateToken(oid, refreshToken, uuid);
//     }

//     const response = NextResponse.json({ success: true, oid: oid });
//     response.headers.set("Set-Cookie", tokenCookie);
//     return response;
//   } catch (error) {
//     console.error("Token acquisition failed:", error);
//     return NextResponse.json({ error: "Token acquisition failed" }, { status: 500 });
//   }
// }

// // PUTメソッドの処理（リフレッシュトークンの利用）
// export async function PUT(request: NextRequest) {
//   try {
//     const json = await request.json();
//     const cipherOid = json.oid as string;

//     // 暗号化されたOIDを復号化
//     const password = process.env.NEXT_PUBLIC_SALT as string;
//     const decipher = crypto.createDecipher("aes-256-cbc", password);
//     const decrypted = decipher.update(cipherOid, "hex", "utf8") + decipher.final("utf8");

//     // Cosmos DBからリフレッシュトークンを取得
//     const refreshToken = await readrefreshtokenFromCosmosDB(`"${decrypted}"`);
//     if (!refreshToken) {
//       return NextResponse.json({ error: "Refresh token not found" }, { status: 400 });
//     }

//     // リフレッシュトークンを使って新しいトークンを取得
//     const result = await msalService.acquireTokenByRefreshToken(refreshToken);
//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("Error during token refresh:", error);
//     return NextResponse.json({ error: "Failed to refresh token" }, { status: 500 });
//   }
// }