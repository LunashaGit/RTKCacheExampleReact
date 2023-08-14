interface IInputTextProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  value,
  onChange,
}: IInputTextProps): JSX.Element => {
  return (
    <>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};
