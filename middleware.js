import { NextResponse } from 'next/server';

export default async function middleware(req) {
	if (req.nextUrl.pathname.startsWith('/chat') && req.cookies.get('_AT') === undefined) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	if ((req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/register') && req.cookies.get('_AT') !== undefined) {
		return NextResponse.redirect(new URL('/chat', req.url));
	}

	return NextResponse.next();
}
