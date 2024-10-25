import ProductWrapper from '@/components/Product/ProductWrapper';

export const metadata = {
  title: 'Product Detail',
};

interface IProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: IProductDetailPageProps) {
  const productId = params.id;

  return (
    <div className="py-12">
      <ProductWrapper productId={productId} />
    </div>
  );
}
