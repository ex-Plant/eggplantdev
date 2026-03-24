import type { AnyFieldApi } from "@tanstack/react-form";

type FieldErrorsPropsT = {
  readonly errors: AnyFieldApi["state"]["meta"]["errors"];
  className?: string;
  id?: string;
};

export function FieldErrors({ errors, className, id }: FieldErrorsPropsT) {
  if (errors.length === 0) return undefined;

  return errors.map((err, i) => (
    <p
      key={i}
      id={i === 0 ? id : undefined}
      role="alert"
      className={`text-14 absolute bottom-0 left-0 text-red-500 ${className}`}
    >
      {typeof err === "string" ? err : err?.message}
    </p>
  ));
}
