export interface IInputTextCache {
  inputText: {
    inputTextCache: string;
  };
}

export interface IInputTextProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
