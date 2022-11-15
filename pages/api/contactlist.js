import { verify } from 'jsonwebtoken';
import { getCookie, deleteCookie } from 'cookies-next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			const list = req.body;

			const token = getCookie('_AT', { req, res });
			if (!token) {
				deleteCookie('_AT', { req, res });
				return res.status(403).json({ status: false, msg: 'Authentification failed' });
			}
			const decode = verify(token, process.env.NEXT_PUBLIC_SECRET_TOKEN);
			const before = await prisma.user.findUnique({
				where: {
					userId: decode.userId,
				},
				select: {
					contact: true,
				},
			});
			const listcontact = before.contact;
			listcontact.push(list.contact);
			const data = await prisma.user.update({
				where: {
					userId: decode.userId,
				},
				data: {
					contact: listcontact,
				},
			});
			res.json({ data });
		} catch (error) {
			res.status(403).json('ERROR');
		}
	} else if (req.method === 'GET') {
		try {
			const token = getCookie('_AT', { req, res });
			if (!token) {
				deleteCookie('_AT', { req, res });
				return res.status(403).json({ status: false, msg: 'Authentification failed' });
			}
			verify(token, process.env.NEXT_PUBLIC_SECRET_TOKEN);
			const found = await prisma.user.findUnique({
				where: {
					userId: req.query.id,
				},
				select: {
					userId: true,
					nickname: true,
				},
			});
			found ? res.json({ status: true, result: found }) : res.json({ status: false });
		} catch (error) {
			res.status(403).json(error);
		}
	} else {
		res.status(405).json('Method not allowed');
	}
}
