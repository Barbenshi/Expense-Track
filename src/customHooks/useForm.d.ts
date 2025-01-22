type Callback = (fields: Record<string, any>) => void;

export function useForm<T>(
  initialState: T,
  cb?: Callback
): [T, (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void, React.Dispatch<React.SetStateAction<T>>];