import PageTitle from '@/components/common/PageTitle';
import SignInForm from '@/components/SignIn/SignInForm';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  const cookie = cookies();
  const user = cookie.get('user')?.value;

  return (
    <div className="flex flex-col items-center px-8 pt-8 pb-12 md:w-1/2 md:mx-auto">
      <PageTitle page_category="sign-in" />
      <SignInForm user={user} />
    </div>
  );
}
