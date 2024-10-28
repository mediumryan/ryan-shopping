import PageTitle from '@/components/common/PageTitle';
import PageWrapper from '@/components/common/PageWrapper';

interface ISearchPageProps {
  params: {
    query: string;
  };
}

export default function SearchPage({ params }: ISearchPageProps) {
  const query = decodeURIComponent(params.query);

  return (
    <div className="relative flex flex-col justify-center items-center px-4 pt-8 pb-12">
      <PageTitle page_category={`「 ${query} 」 (으)로 검색한 결과입니다.`} />
      <PageWrapper isSearch={true} page_category={query} />
    </div>
  );
}
