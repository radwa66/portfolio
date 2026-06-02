import { FieldError, UseFormRegister } from "react-hook-form";

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
};

export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
}: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-300">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        className={`w-full rounded-lg border bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400 ${
          error ? "border-red-400" : "border-white/10"
        }`}
      />
      {error && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
    </div>
  );
}
