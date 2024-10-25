import PageTitle from '@/components/common/PageTitle';
import SignUpForm from '@/components/SignUp/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center px-8 pt-8 pb-12 md:w-1/2 md:mx-auto">
      <PageTitle page_category="sign-up" />
      <SignUpForm />
    </div>
  );
}
