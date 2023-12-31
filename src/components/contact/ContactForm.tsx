"use client";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";

interface Props {
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

const ContactForm = ({
  agree,
  directly,
  email,
  fill,
  first,
  form,
  last,
  send,
  text,
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
  const boxShadow = "0px 4.528px 11.319px 0px rgba(0, 0, 0, 0.25)";
  const { toast } = useToast();

  async function handleSubmit(event: any) {
    event.preventDefault();

    const nameInput = event.target.elements["name"];
    const lastNameInput = event.target.elements["last name"];
    const emailInput = event.target.elements["email"];
    const messageInput = event.target.elements["message"];

    if (nameInput.value.length < 3 || nameInput.value.length > 50) {
      return toast({
        description:
          nameInput.value.length < 3 ? `${nameMinLength}` : `${nameMaxLength}`,
        variant: "destructive",
      });
    }

    if (lastNameInput.value.length < 3 || lastNameInput.value.length > 50) {
      return toast({
        description:
          lastNameInput.value.length < 3
            ? `${lastNameMinLength}`
            : `${lastNameMaxLength}`,
        variant: "destructive",
      });
    }

    if (emailInput.value.length < 5 || emailInput.value.length > 50) {
      return toast({
        description:
          emailInput.value.length < 5
            ? `${emailMinLength}`
            : `${emailMaxLength}`,
        variant: "destructive",
      });
    }

    if (messageInput.value.length < 12 || messageInput.value.length > 5000) {
      return toast({
        description:
          messageInput.value.length < 12
            ? `${messageMinLength}`
            : `${messageMaxLength}`,
        variant: "destructive",
      });
    }

    const formData = new FormData(event.target);

    formData.append("access_key", "f9c33730-111a-471f-9fd0-76359166a2f8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      toast({
        description: "Your email has been send",
      });
      event.target.reset();
    }
  }

  return (
    <div
      className="bg-white flex flex-col w-full max-w-[500px] md:max-w-full mx-auto md:mx-0 md:w-[46.29%] rounded-[10.64px] lg:rounded-[15.09px] xl:rounded-[18.39px] 
    min-h-[334.87px] md:min-h-[350.82px] lg:min-h-[467.76px] xl:min-h-[569.95px] 2xl:min-h-[641.19px] 3xl:min-h-[660.53px] desktop:min-h-[726.69px]
    py-[18px] lg:py-[25px] xl:py-[31px] 2xl:py-[35px] desktop:py-[40px]
    px-[20px] lg:px-[29px] xl:px-[35px] 2xl:px-[40px] desktop:px-[45px]
    "
    >
      <h1 className="text-form opacity-80 font-bold text-[13.52px] md:text-[14.38px] lg:text-[19.17px] xl:text-[23.36px] 2xl:text-[26.28px] 3xl:text-[27.07px] desktop:text-[29.78px]">
        {form}
      </h1>
      <p className="text-form opacity-80 font-medium text-[9.13px] lg:text-[12.95px] xl:text-[15.77px] 2xl:text-[17.74px] 3xl:text-[18.28px] desktop:text-[20.11px]">
        {fill}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-[8px] lg:gap-y-[10px] xl:gap-y-[13px] 2xl:gap-y-[15px] desktop:gap-y-[18px]
        mt-[11px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] desktop::mt-[25px]
        "
      >
        <input
          style={{
            boxShadow: boxShadow,
          }}
          type="text"
          name="name"
          className="placeholder:text-placeholder text-black text-[9.13px] lg:text-[12.95px] xl:text-[15.78px] 2xl:text-[17.75px] 3xl:text-[18.28px] desktop:text-[20.11px]
          border border-[#CFCFCF] px-[10px] lg:px-[14px] xl:px-[17px] 2xl:px-[19px] desktop:px-[22px]
          h-[23.63px] md:h-[25.14px] lg:h-[33.52px] xl:h-[40.84px] 2xl:h-[45.94px] 3xl:h-[47.33px] desktop:h-[52.07px]
          rounded-[3px] lg:rounded-[4px] xl:rounded-[5px] 2xl:rounded-[6px]
          "
          placeholder={first}
        />
        <input
          type="text"
          name="last name"
          style={{
            boxShadow: boxShadow,
          }}
          className="placeholder:text-placeholder text-black text-[9.13px] lg:text-[12.95px] xl:text-[15.78px] 2xl:text-[17.75px] 3xl:text-[18.28px] desktop:text-[20.11px]
          border border-[#CFCFCF] px-[10px] lg:px-[14px] xl:px-[17px] 2xl:px-[19px] desktop:px-[22px]
          h-[23.63px] md:h-[25.14px] lg:h-[33.52px] xl:h-[40.84px] 2xl:h-[45.94px] 3xl:h-[47.33px] desktop:h-[52.07px]
          rounded-[3px] lg:rounded-[4px] xl:rounded-[5px] 2xl:rounded-[6px]
          "
          placeholder={last}
        />
        <input
          type="email"
          name="email"
          style={{
            boxShadow: boxShadow,
          }}
          className="placeholder:text-placeholder text-black text-[9.13px] lg:text-[12.95px] xl:text-[15.78px] 2xl:text-[17.75px] 3xl:text-[18.28px] desktop:text-[20.11px]
          border border-[#CFCFCF] px-[10px] lg:px-[14px] xl:px-[17px] 2xl:px-[19px] desktop:px-[22px]
          h-[23.63px] md:h-[25.14px] lg:h-[33.52px] xl:h-[40.84px] 2xl:h-[45.94px] 3xl:h-[47.33px] desktop:h-[52.07px]
          rounded-[3px] lg:rounded-[4px] xl:rounded-[5px] 2xl:rounded-[6px]
          "
          placeholder={email}
        />
        <textarea
          name="message"
          placeholder={text}
          style={{
            boxShadow: boxShadow,
          }}
          className="placeholder:text-placeholder text-black resize-y text-[9.13px] lg:text-[12.95px] xl:text-[15.78px] 2xl:text-[17.75px] 3xl:text-[18.28px] desktop:text-[20.11px]
          border border-[#CFCFCF] px-[10px] lg:px-[14px] xl:px-[17px] 2xl:px-[19px] desktop:px-[22px]
          py-[7px] lg:py-[10px] xl:py-[12px] desktop:py-[15px]
          h-[64.55px] md:h-[68.66px] lg:h-[91.55px] xl:h-[111.55px] 2xl:h-[125.5px] 3xl:h-[129.28px] desktop:h-[142.23px]
          rounded-[3px] lg:rounded-[4px] xl:rounded-[5px] 2xl:rounded-[6px]"
        />
        <div className="flex gap-[5px] lg:gap-[7px] 2xl:gap-[9px] items-start">
          <input
            type="checkbox"
            className="w-[9.16px] lg:w-[12.21px] xl:w-[14.87px] 2xl:w-[16.73px] 3xl:w-[17.24px] desktop:w-[19px] aspect-square desktop:mt-[2px]"
          />
          <p className="text-[#584F49] font-medium text-[8px] lg:text-[11.41px] xl:text-[14px] 2xl:text-[15px] desktop:text-[17px] leading-tight">
            {agree}
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <button
            type="submit"
            style={{
              boxShadow: "0px 0px 33.958px 0px rgba(95, 67, 178, 0.50)",
            }}
            className="bg-primary font-bold text-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] desktop:text-[15px]
            px-[13px] lg:px-[19px] xl:px-[23px] 2xl:px-[25px] desktop:px-[30px]
            py-[8px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] desktop:py-[16px]
            rounded-[3px] lg:rounded-[4px] xl:rounded-[5px] 2xl:rounded-[6px]
            "
          >
            {send}
          </button>
          <div className="flex flex-col">
            <p className="text-black font-medium text-[8px] lg:text-[11.41px] xl:text-[14px] 2xl:text-[15px] desktop:text-[17px] text-right leading-tight">
              {directly}
            </p>
            <p className="text-black font-medium text-[8px] lg:text-[11.41px] xl:text-[14px] 2xl:text-[15px] desktop:text-[17px] leading-tight">
              support@outofplace.space
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
