import { NextApiRequest, NextApiResponse } from 'next'

export default async function checkAuth(req: NextApiRequest, res: NextApiResponse) {
  // ここで実際の認証チェックを行う
  // 例: JWTトークンの検証、セッションの確認など 
  const authToken = req.cookies.authToken

  if (!authToken) {
    return res.status(401).json({ isAuthenticated: false })
  }

  // トークンの検証ロジックをここに実装
  // 仮の実装として、トークンが存在すれば認証済みとする
  console.log("dou?")
  return res.status(200).json({ isAuthenticated: true })
}