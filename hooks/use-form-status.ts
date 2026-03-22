import { type AnyFormApi, useStore } from "@tanstack/react-form";

type UseFormStatusResultT = {
  isSubmitting: boolean;
  isInvalid: boolean;
  canSubmit: boolean;
};

export function useFormStatus(form: AnyFormApi): UseFormStatusResultT {
  const isSubmitting = useStore(form.store, (s) => s.isSubmitting);
  const isValid = useStore(form.store, (s) => s.isValid);
  const formCanSubmit = useStore(form.store, (s) => s.canSubmit);
  const isTouched = useStore(form.store, (s) => s.isTouched);
  const submissionAttempts = useStore(form.store, (s) => s.submissionAttempts);

  // Show invalid state only after user attempted to submit
  const isInvalid = submissionAttempts > 0 && !isValid;

  const canSubmit = formCanSubmit && isTouched;

  return { isSubmitting, isInvalid, canSubmit };
}
