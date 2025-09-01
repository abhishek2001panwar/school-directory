import nextConnect from "next-connect";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/lib/cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "school-directory", // all uploads go here
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single("file"));

apiRoute.post((req, res) => {
  res.status(200).json({ url: req.file.path }); // cloudinary returns hosted image URL
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
