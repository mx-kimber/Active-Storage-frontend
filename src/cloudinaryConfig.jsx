import { CloudinaryContext } from "cloudinary-react";

const cloudinaryConfig = {
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
};

const CloudinaryConfigProvider = ({ children }) => (
  <CloudinaryContext cloudName={cloudinaryConfig.cloud_name}>
    {children}
  </CloudinaryContext>
);

export default CloudinaryConfigProvider;
