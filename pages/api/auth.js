import { verify } from 'jsonwebtoken';
import { getCookie } from 'cookies-next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const token = getCookie('_AT', { req, res });
			if (!token) return res.status(403).json('Auth failed');
			const decode = verify(token, process.env.NEXT_PUBLIC_SECRET_TOKEN);
			const data = await prisma.user.findUnique({
				where: {
					userId: decode.userId,
				},
				select: {
					username: true,
					userId: true,
					nickname: true,
				},
			});
			res.json(data);
		} catch (error) {
			return res.status(403).json('Auth failed');
		}
	} else {
		res.status(404).json('Method not allowed');
	}
}
