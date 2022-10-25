import { NextResponse } from 'next/server';

export default function middleware(req) {
	if (req.nextUrl.pathname.startsWith('/chat') && req.cookies.get('_AT') === undefined) {
		return NextResponse.redirect(new URL('/', req.url));
	}
	return NextResponse.next();
}
