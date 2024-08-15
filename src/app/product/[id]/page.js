import { fetchProduct } from './api'; // Adjust the path if necessary
import ProductPage from './ProductPage'; // Adjust the path if necessary
import 'bootstrap/dist/css/bootstrap.min.css';

// Define metadata generation
export async function generateMetadata({ params }) {
  const product = await fetchProduct(params.id);

  return {
    title: product ? `${product.title} | Product Details` : 'Product Details',
    description: product ? product.description : 'Product details not available.',
    openGraph: {
      title: product ? product.title : 'Product Details',
      description: product ? product.description : 'Product details not available.',
      images: product ? [product.image] : [],
      url: product ? `http://localhost:3000/product/${params.id}` : 'http://localhost:3000/product',
      type: 'website',
      siteName: 'Your Site Name',
    },
  };
}

// Server component to fetch product data
export default async function ProductPageServer({ params }) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return <div>Error: Product not found.</div>;
  }

  return <ProductPage product={product} />;
}