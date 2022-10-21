import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	try {
		if (req.method === 'POST') {
			const data = req.body;
			const same = await prisma.user.findUnique({
				where: {
					username: data.username,
				},
				select: {
					username: true,
				},
			});
			if (same) return res.status(400).json({ status: false, msg: 'Username has already been taken' });
			if (data.password !== data.confirmPassword) return res.status(400).json({ status: false, msg: 'Password and confirm password must be match' });
			if (data.username.length <= 8 || data.password.length <= 8) return res.status(400).json({ status: false, msg: 'Username or password less than 8 character' });
			data.password = await argon2.hash(data.password);
			delete data.confirmPassword;
			Object.assign(data, { userId: `11${Math.floor(Math.random() * 10 ** 10)}` });
			await prisma.user.create({ data });
			res.json({ status: true, msg: 'Registration successful' });
		} else {
			return res.status(405).json('Method not allowed');
		}
	} catch (error) {
		res.status(500).json({ error });
	}
}
