export type InputElement = React.ChangeEvent<HTMLInputElement>;
export type FormElement = React.ChangeEvent<HTMLFormElement>;

export interface InputProps {
  bind: {
    value: string;
    onChange: (event: InputElement) => void;
    placeholder: string;
    type: 'text';
  };
  reset: () => void;
  isBig?: boolean;
}
