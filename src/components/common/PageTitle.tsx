interface IPageTitleProps {
  page_category: string;
}

export default function PageTitle({ page_category }: IPageTitleProps) {
  return (
    <h2 className="text-2xl mb-6 font-bold italic">
      {page_category.toUpperCase()}
    </h2>
  );
}
