"use client";

import { useEffect, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { ConfirmOverlay } from "@/components/general/confirm-overlay";
import { sendEmail } from "@/helpers/send-email";
import { quickContactSchema } from "@/helpers/contact-schema";
import { useFormStatus } from "@/hooks/use-form-status";
import { Spinner } from "@/components/general/spinner";
import { FieldErrors } from "@/components/ui/field-errors";
import { SubmitButton } from "@/components/ui/submit-button";
import { useTranslation } from "@/lib/i18n/hooks/use-translation";

type ButtonFormPropsT = {
  closeBtn: () => void;
  open: boolean;
};

export function ButtonForm({ closeBtn, open }: ButtonFormPropsT) {
  const [submitMessage, setSubmitMessage] = useState("");
  const { t } = useTranslation("form");

  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: quickContactSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        await sendEmail(value);
        setSubmitMessage("Email sent successfully");
        form.reset();
        closeBtn();
      } catch (error) {
        console.error(error);
        setSubmitMessage(error instanceof Error ? error.message : "Something went wrong");
      }
    },
  });

  const { isSubmitting, canSubmit } = useFormStatus(form);

  useEffect(() => {
    if (!open) form.reset();
  }, [open, form]);

  return (
    <>
      <p className="text-16 w-[170px] pt-6">{t("quickContactPrompt")}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field name="email">
          {(field) => (
            <div className="relative">
              <input
                className="border-gray7 text-16 placeholder:text-gray7 mt-6 h-12 w-full border-b outline-none"
                type="email"
                placeholder={t("email")}
                aria-label={t("email")}
                autoComplete="email"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                aria-invalid={field.state.meta.errors.length > 0}
                aria-describedby={field.state.meta.errors.length > 0 ? "quick-email-error" : undefined}
              />
              <FieldErrors errors={field.state.meta.errors} id="quick-email-error" />
            </div>
          )}
        </form.Field>
        <SubmitButton isSubmitting={isSubmitting} canSubmit={canSubmit} className="pt-5" />
      </form>
      <ConfirmOverlay submitMessage={submitMessage} setSubmitMessage={setSubmitMessage} />
    </>
  );
}
