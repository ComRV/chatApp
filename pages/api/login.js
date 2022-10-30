import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import { setCookies, deleteCookie, getCookie } from 'cookies-next';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const data = req.body;
			const auth = await prisma.user.findUnique({
				where: {
					username: data.username,
				},
				select: {
					username: true,
					password: true,
					userId: true,
				},
			});
			const match = await argon2.verify(auth.password, data.password);
			if (!match) return res.status(400).json({ status: false, msg: 'Username or password incorrect' });
			const accessToken = jwt.sign({ userId: auth.userId }, process.env.NEXT_PUBLIC_SECRET_TOKEN);
			data.isStay
				? setCookies('_AT', accessToken, { req, res, maxAge: 30 * 24 * 60 * 60, httpOnly: true, sameSite: 'strict' })
				: setCookies('_AT', accessToken, { req, res, httpOnly: true, sameSite: 'strict' });
			res.json('OK');
		} catch (error) {
			return res.status(400).json({ status: false, msg: 'Username or password incorrect' });
		}
	} else if (req.method === 'DELETE') {
		if (getCookie('_AT', { req, res }) === undefined) {
			res.status(404).json('404 error not found');
		} else {
			deleteCookie('_AT', { req, res });
			res.status(200).json('OK');
		}
	} else {
		return res.status(405).json('Method not allow');
	}
}
