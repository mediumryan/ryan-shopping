import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaCheck, FaMagnifyingGlass } from 'react-icons/fa6';

export default function HeaderMenuSearch() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-gray-400 mb-12">
      <div className="flex items-center justify-center">
        <FaMagnifyingGlass />
        <span className="text-lg font-bold">상품검색</span>
      </div>
      <form className="flex items-center gap-2">
        <Input type="text" placeholder="ex) 셔츠" className="text-black" />
        <Button variant="ghost" type="submit">
          <FaCheck />
        </Button>
      </form>
    </div>
  );
}
