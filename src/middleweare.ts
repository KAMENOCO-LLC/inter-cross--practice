import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/:path*'],
}

export const middleware = (req: NextRequest) => {
  // if(process.env.VERCEL_ENV === 'production') return
  const url = req.nextUrl
  const authorizationHeader = req.headers.get('authorization')

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split('')[1]
    const [user, password] = atob(basicAuth).split(':')

    if (
      user === process.env.BASSIC_AUTH_USER &&
      password === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next()
    }
  }

  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
