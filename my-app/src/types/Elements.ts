export type InputElement = React.ChangeEvent<HTMLInputElement>;

export interface InputProps {
  value: string;
  onChange: (event: InputElement) => void;
  placeholder: string;
  type: 'text';
}
