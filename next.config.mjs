/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"lh3.googleusercontent.com"
            },
            {
                protocol:"https",
                hostname:"6106zfngxprmyefr.public.blob.vercel-storage.com"
            },
            {
                protocol:"https",
                hostname:"api.sandbox.midtrans.com"
            },
            {
                protocol:"https",
                hostname:"merchants-app.sbx.midtrans.com"
            },
        ]
    }
};

export default nextConfig;
