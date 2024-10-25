import PageTitle from '@/components/common/PageTitle';
import PageWrapper from '@/components/common/PageWrapper';

export const metadata = {
  title: 'One Piece',
};

export default function OnePiecePage() {
  const page_category = 'one-piece';

  return (
    <div className="relative flex flex-col justify-center items-center px-4 pt-8 pb-12">
      <PageTitle page_category={page_category} />
      <PageWrapper page_category={page_category} />
    </div>
  );
}
