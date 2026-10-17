import type {NextConfig} from 'next';
const nextConfig:NextConfig={async redirects(){return ['/about','/services','/contact','/testimonials'].map(source=>({source,destination:source==='/about'?'/#about':'/#library',permanent:false}))}};
export default nextConfig;
