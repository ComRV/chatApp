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
			const decode = verify(token, process.env.NEXT_PUBLIC_SECRET_TOKEN);
			const data = await prisma.user.findUnique({
				where: {
					userId: decode.userId,
				},
				select: {
					nickname: true,
					userId: true,
				},
			});
			res.json(data);
		} catch (error) {
			deleteCookie('_AT', { req, res });
			return res.status(404).json({ error });
		}
	} else {
		res.status(404).json('Method not allowed');
	}
}
