import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import { setCookies } from 'cookies-next';

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
			const payload = accessToken.split('.');
			data.isStay ? setCookies('_AT', payload[2], { req, res, maxAge: 30 * 24 * 60 * 60, httpOnly: true }) : setCookies('_AT', payload[2], { req, res, httpOnly: true });
			res.json('OK');
		} catch (error) {
			return res.status(400).json({ status: false, msg: 'Username or password incorrect' });
		}
	} else {
		return res.status(405).json('Method not allow');
	}
}