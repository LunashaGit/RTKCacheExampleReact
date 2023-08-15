import { IInputTextProps } from "@/types/IInputTextCache";

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
