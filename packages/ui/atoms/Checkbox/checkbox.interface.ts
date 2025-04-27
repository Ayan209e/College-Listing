export interface ICheckboxProps {
  checked?: boolean;
  className?: string;
  label?: string;
  labelClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
