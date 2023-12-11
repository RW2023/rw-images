import { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

type CloudinaryImage = {
  secure_url: string;
};

type Image = {
  url: string;
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Image[] | { message: string }>,
) {
  try {
    const { resources } = await cloudinary.search
      .expression('folder:Photography/portfolio/ai')
      .sort_by('public_id', 'desc')
      .max_results(40)
      .execute();

    const images = resources.map((file: CloudinaryImage) => ({
      url: file.secure_url,
    }));

    // Set cache headers
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=600',
    );
    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Error fetching images' });
  }
}
