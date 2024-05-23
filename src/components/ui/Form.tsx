"use client";

import { ReactNode, useRef } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | null>;
  className: string;
  onSubmit?: (() => void | undefined) | undefined;
}

const Form = ({ children, action, className }: formProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      className={className}
    >
      {children}
    </form>
  );
};
export default Form;
