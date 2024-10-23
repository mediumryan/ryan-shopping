import React from 'react';

export default function PageTitle({
  page_category,
}: {
  page_category: string;
}) {
  return (
    <h2 className="text-2xl mb-6 font-bold italic">
      {page_category.toUpperCase()}
    </h2>
  );
}
