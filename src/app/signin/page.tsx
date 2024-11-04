"use client"
import { useRouter } from 'next/navigation'
import { useEffect,Suspense } from 'react'
import Space from "@/components/elements/Space/Space";



export default function SigninPage({ params }: { params: { from: string } }) {
  const router = useRouter()
//   const { from } = router.query
  const { from } = params


  const signin = async () => {
    const response = await fetch("/api/auth/signin")
    const data = await response.json()
    // JWTをコンソールに表示
    console.log("JWT Token:", data.jwt)
    window.location.href = data.redirect_url
  }

  useEffect(() => {
    // ここで認証状態をチェックし、既に認証済みの場合は元のページにリダイレクト
    const checkAuth = async () => {
      // 認証状態チェックのロジックを実装
      const isAuthenticated = false // ここを実際の認証チェックに置き換える
      if (isAuthenticated && from) {
        router.push(from as string)
      }
    }
    checkAuth()
  }, [from, router])

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Space />
    <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl">セッション情報が切れています。</h1>
        <h1 className="text-2xl mb-4">ログインしてください。</h1>
        
        {/* ボタンのコンテナをフレックスボックスにし、横並びにする */}
        <div className="flex justify-center space-x-4">
            <button 
                onClick={signin} 
                className="idden md:block px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100"
            >
                Signin
            </button>
            
            <button 
                // onClick={signup}  // signup関数を設定
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 active:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md"
            >
                Signup
            </button>
        </div>
    </div>
</div>
</Suspense>
    )
}