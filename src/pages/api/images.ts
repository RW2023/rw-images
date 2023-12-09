import { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

// Define a type for the response from Cloudinary
type CloudinaryImage = {
  secure_url: string;
  // Include other properties from Cloudinary's response as needed
};

// Define the image type for your application
type Image = {
  url: string;
  // Add any other relevant properties
};

// Cloudinary configuration
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
      .expression('folder:Photography/portfolio') 
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    const images = resources.map((file: CloudinaryImage) => ({
      url: file.secure_url,
      // Map other properties if needed
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Error fetching images' });
  }
}
