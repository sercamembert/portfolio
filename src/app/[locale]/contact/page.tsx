import React from "react";
import { useTranslations } from "next-intl";
import Contact from "@/components/contact/Contact";

const page = () => {
  const contactText = useTranslations("Contact");
  return (
    <Contact
      agree={contactText("agree")}
      directly={contactText("directly")}
      email={contactText("email")}
      fill={contactText("fill")}
      first={contactText("first")}
      form={contactText("form")}
      last={contactText("last")}
      send={contactText("send")}
      text={contactText("text")}
      title={contactText("title")}
      success={contactText("success")}
      nameMinLength={contactText("nameMinLength")}
      nameMaxLength={contactText("nameMaxLength")}
      lastNameMinLength={contactText("lastNameMinLength")}
      lastNameMaxLength={contactText("lastNameMaxLength")}
      emailMinLength={contactText("emailMinLength")}
      emailMaxLength={contactText("emailMaxLength")}
      messageMinLength={contactText("messageMinLength")}
      messageMaxLength={contactText("messageMaxLength")}
    />
  );
};

export default page;
