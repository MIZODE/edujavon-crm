import React from "react";

export const formatPhoneNumber = (value) => {
  const phoneNumber = value.replace(/[^\d]/g, "");
  if (!phoneNumber) return "";

  let formatted = "+998";
  if (phoneNumber.length > 3) formatted += " " + phoneNumber.substring(3, 5);
  if (phoneNumber.length > 5) formatted += " " + phoneNumber.substring(5, 8);
  if (phoneNumber.length > 8) formatted += " " + phoneNumber.substring(8, 10);
  if (phoneNumber.length > 10) formatted += " " + phoneNumber.substring(10, 12);

  return formatted;
};

export default function FormatPhone(setPhoneNumber, phoneNumber) {
  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    setPhoneNumber(formatted);
  };
  return handlePhoneChange;
}
