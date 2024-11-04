// app/auth/redirect/page.tsx
import Redirect from "@/components/elements/Redirect/Redirect";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <h1>Redirect Page</h1>
      {/* クライアントコンポーネントとしてRedirectを呼び出し */}
      <Suspense>
      <Redirect />
      </Suspense>
    </div>
  );
}

// 'use client';
// import { AuthenticationResult } from "@azure/msal-node"
// import axios from "axios"
// import { useSearchParams } from "next/navigation"
// import { useEffect, useState, Suspense } from "react"

// export default function Home() {
//   const params = useSearchParams()
//   const [state, setState] = useState({
//     jwt: "",
//   })
//   // const [code, _] = useState(params.get("code"))
//   const [code, _] = useState(params ? params.get("code") : null);


//   useEffect(() => {
//     if (!code) return; // codeがnullの場合はリクエストを行わない

//     (async() => {
//       // 認証をかける
//       const url = "/api/auth/verify"
//       const {data}: {data: AuthenticationResult} = await axios.post(url, {
//         code
//       })
//       setState({jwt: data.accessToken})
//     })()
//   }, [code])

//   return (
//     <div>
//       {state.jwt}
//     </div>
//   )
// }



// 'use client';
// import { AuthenticationResult } from "@azure/msal-node";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState, Suspense } from "react";

// export default function Home() {
//   const [state, setState] = useState({
//     jwt: "",
//   });

//   useEffect(() => {
//     const params = useSearchParams();
//     const code = params ? params.get("code") : null;
//     if (!code) return; // codeがnullの場合はリクエストを行わない

//     (async () => {
//       try {
//         const url = "/api/auth/verify";
//         const { data }: { data: AuthenticationResult } = await axios.post(url, {
//           code,
//         });
//         setState({ jwt: data.accessToken });
//       } catch (error) {
//         console.error("Error during authentication", error);
//       }
//     })();
//   }, []); // 依存配列を空にして初回のみ実行

//   return (
//       <div>
//         {state.jwt ? <div>JWT: {state.jwt}</div> : <div>Authenticating...</div>}
//       </div>
//   );
// }
