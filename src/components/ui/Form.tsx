import { ReactNode } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | null>;
  className: string;
  onSubmit?: () => void;
}

const Form = ({ children, action, className }: formProps) => {
  return (
    <form action={action} className={className}>
      {children}
    </form>
  );
};
export default Form;
