import { verify } from 'jsonwebtoken';
import { getCookie, deleteCookie } from 'cookies-next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const token = getCookie('_AT', { req, res });
			if (!token) {
				deleteCookie('_AT', { req, res });
				return res.status(403).json({ status: false, msg: 'Authentification failed' });
			}
			const decoded = verify(token, process.env.NEXT_PUBLIC_SECRET_TOKEN);
			const lists = await prisma.user.findUnique({
				where: {
					userId: decoded.userId,
				},
				select: {
					contact: true,
				},
			});
			const contactData = [];
			lists.contact.forEach(async (list) => {
				const contact = await prisma.user.findUnique({
					where: {
						userId: list,
					},
					select: {
						nickname: true,
						userId: true,
					},
				});
				contactData.push(contact);
			});
			setTimeout(() => {
				if (contactData.length === 0) return res.json({ status: false });
				res.json(contactData);
			}, 1000);
		} catch (error) {
			res.status(403).json('ERROR');
			console.log(error);
		}
	} else if (req.method === 'POST') {
		try {
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
			listcontact.push(req.body.id);
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
			console.log(error);
		}
	} else {
		res.status(405).json('Method not allowed');
	}
}
