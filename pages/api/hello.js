import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
	try {
		const tes = await prisma.tes.create({
			data: {
				title: 'tes',
				slug: 'dqwhdqud',
			},
		});
		res.json(tes);
	} catch (error) {
		res.json(error);
	}
}
