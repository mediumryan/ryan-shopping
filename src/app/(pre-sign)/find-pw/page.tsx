import PageTitle from '@/components/common/PageTitle';
import FindPwForm from '@/components/FindPw/FindPwForm';

export const metadata = {
  title: 'Find Password',
};

export default function FindPwPage() {
  return (
    <div className="flex flex-col items-center px-8 pt-8 pb-12 md:w-1/2 md:mx-auto">
      <PageTitle page_category="find-pw" />
      <FindPwForm />
    </div>
  );
}
