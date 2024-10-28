import { FaSpinner } from 'react-icons/fa';
import { Dialog, DialogOverlay } from '@/components/ui/dialog';

export default function Loading() {
  return (
    <Dialog defaultOpen={true}>
      <DialogOverlay className="flex justify-center items-center">
        <FaSpinner className="animate-spin w-16 h-16 text-green-700" />
      </DialogOverlay>
    </Dialog>
  );
}
