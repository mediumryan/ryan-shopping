import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ProductType } from '@/data/product';

interface IColorToggleProps {
  data: ProductType | undefined;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export function ColorToggle({ data, color, setColor }: IColorToggleProps) {
  return (
    <>
      {data && (
        <ToggleGroup
          type="single"
          value={color.toString()}
          className="justify-start"
          onValueChange={setColor}
        >
          {data.color.map((value) => {
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
