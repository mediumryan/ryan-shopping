interface IQueryPageProps {
  params: {
    query: string;
  };
}

export default function QueryPage({ params }: IQueryPageProps) {
  const query = params.query;

  return <div>{query}</div>;
}
