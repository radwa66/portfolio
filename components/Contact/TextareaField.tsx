import { FieldError, UseFormRegister } from "react-hook-form";

type TextareaFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: FieldError;
};

export default function TextareaField({
  id,
  label,
  placeholder,
  register,
  error,
}: TextareaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-gray-300">
        {label}
      </label>

      <textarea
        id={id}
        rows={5}
        placeholder={placeholder}
        aria-invalid={!!error}
        {...register(id)}
        className={`w-full resize-none rounded-lg border bg-transparent px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-emerald-400 ${
          error ? "border-red-400" : "border-white/10"
        }`}
      />
       {error && (
        <p className="mt-2 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}
