type BtnProps = {
  text: string,
  disabled: boolean,
};

export const Button = ({ text, disabled }: BtnProps) => {
  <button disabled={disabled}>{text}</button>;
};
