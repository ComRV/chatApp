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
			const found = await prisma.user.findUnique({
				where: {
					userId: req.query.id,
				},
				select: {
					userId: true,
					nickname: true,
				},
			});
			if (!found || found.userId === decoded.userId) return res.json({ status: false });
			const exist = await prisma.user.findUnique({
				where: {
					userId: decoded.userId,
				},
				select: {
					contact: true,
				},
			});
			Object.assign(found, { exist: false });
			if (exist) {
				exist.contact.map((xist) => {
					if (xist === found.userId) found.exist = true;
				});
			}
			res.json({ status: true, result: found });
		} catch (error) {
			res.status(403).json('ERROR');
		}
	} else {
		res.status(405).json('Method not allowed');
	}
}
