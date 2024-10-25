import PageTitle from '@/components/common/PageTitle';
import SignInForm from '@/components/SignIn/SignInForm';

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center px-8 pt-8 pb-12 md:w-1/2 md:mx-auto">
      <PageTitle page_category="sign-in" />
      <SignInForm />
    </div>
  );
}
