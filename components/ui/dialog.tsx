"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence } from "framer-motion";

import { cn } from "@/helpers/cn";
import { DialogMotionContent, DialogMotionOverlay } from "@/components/ui/dialog-motion";

const DialogOpenContext = React.createContext<boolean | undefined>(undefined);

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return (
    <DialogOpenContext value={props.open}>
      <DialogPrimitive.Root data-slot="dialog" {...props} />
    </DialogOpenContext>
  );
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay forceMount data-slot="dialog-overlay" asChild {...props}>
      <DialogMotionOverlay className={cn("fixed inset-0 z-999999 bg-black/80", className)} />
    </DialogPrimitive.Overlay>
  );
}

function DialogContent({ className, children, ...props }: React.ComponentProps<typeof DialogPrimitive.Content>) {
  const isOpen = React.useContext(DialogOpenContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <DialogPortal forceMount data-slot="dialog-portal">
          <DialogOverlay />
          <DialogPrimitive.Content forceMount asChild {...props}>
            <DialogMotionContent
              data-slot="dialog-content"
              className={cn("fixed top-1/2 left-1/2 z-999999 -translate-x-1/2 -translate-y-1/2", className)}
            >
              {children}
            </DialogMotionContent>
          </DialogPrimitive.Content>
        </DialogPortal>
      )}
    </AnimatePresence>
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description data-slot="dialog-description" className={cn("text-sm", className)} {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
