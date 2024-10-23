import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ProductType } from '@/data/product';

interface ISizeToggleProps {
  data: ProductType | undefined;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

export function SizeToggle({ data, size, setSize }: ISizeToggleProps) {
  return (
    <>
      {data && (
        <ToggleGroup
          type="single"
          value={size.toString()}
          className="justify-start"
          onValueChange={setSize}
        >
          {data.size.map((value) => {
            return (
              <ToggleGroupItem
                key={value}
                variant="outline"
                value={value.toString()}
                aria-label={`Toggle ${value}`}
              >
                {value}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      )}
    </>
  );
}
