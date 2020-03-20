export type InputElement = React.ChangeEvent<HTMLInputElement>;

export interface InputProps {
  bind: {
    value: string;
    onChange: (event: InputElement) => void;
    placeholder: string;
    type: 'text';
  };
  reset: () => void;
}
