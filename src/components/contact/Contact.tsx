import React from "react";
import ContactForm from "./ContactForm";

interface Props {
  title: string;
  form: string;
  fill: string;
  first: string;
  last: string;
  email: string;
  text: string;
  agree: string;
  send: string;
  directly: string;
  success: string;
  nameMinLength: string;
  nameMaxLength: string;
  lastNameMinLength: string;
  lastNameMaxLength: string;
  emailMinLength: string;
  emailMaxLength: string;
  messageMinLength: string;
  messageMaxLength: string;
}

const Contact = ({
  agree,
  directly,
  email,
  fill,
  first,
  form,
  last,
  send,
  text,
  title,
  emailMaxLength,
  emailMinLength,
  lastNameMaxLength,
  lastNameMinLength,
  messageMaxLength,
  messageMinLength,
  nameMaxLength,
  nameMinLength,
  success,
}: Props) => {
  return (
    <div
      className="min-h-screen padding pt-[80px] md:pt-[95px] lg:pt-[100px] xl:pt-[110px] 2xl:pt-[140px] desktop:pt-[160px]
      flex flex-col"
    >
      <h1 className="text-center md:text-left font-extrabold text-[35px] md:text-[65.37px] lg:text-[87.16px] xl:text-[106.2px] 2xl:text-[119.48px] 3xl:text-[123.08px] desktop:text-[135.41px]">
        {title}
      </h1>
      <div className="flex mb-[60px] md:mb-[70px] lg:mb-[92px] xl:mb-[124px] 2xl:mb-[140px] 3xl:mb-[165px] desktop:mb-[195px]">
        <ContactForm
          agree={agree}
          directly={directly}
          email={email}
          fill={fill}
          first={first}
          form={form}
          last={last}
          send={send}
          text={text}
          success={success}
          nameMinLength={nameMinLength}
          nameMaxLength={nameMaxLength}
          lastNameMinLength={lastNameMinLength}
          lastNameMaxLength={lastNameMaxLength}
          emailMinLength={emailMinLength}
          emailMaxLength={emailMaxLength}
          messageMinLength={messageMinLength}
          messageMaxLength={messageMaxLength}
        />
      </div>
    </div>
  );
};

export default Contact;
