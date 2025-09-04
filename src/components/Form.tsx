import { useState } from "react";
import type { FieldType } from "../types";
import { sendEmail } from "../services";

export default function Form() {
  const [alert, setAlert] = useState("");
  const [field, setField] = useState<FieldType>({
    email: "",
    message: "",
  });

  const SendEmail = sendEmail;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(field).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    // TODO Enviar formulario

    await SendEmail(field.email, field.message);

    setField({
      email: "",
      message: "",
    });
    setAlert("");
  };

  return (
    <div className="inline-block px-5 py-10 rounded-lg shadow border-2 border-white w-3xl">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-5 grid grid-cols-4 items-center gap-4">
          <label
            htmlFor="email"
            className="text-2xl font-black col-span-1 underline text-blue-300"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@gmail.com"
            className="border-2 border-white p-2 rounded-lg col-span-3 text-lg"
            onChange={handleChange}
            value={field.email}
          />
        </div>
        <div className="grid grid-cols-4 items-start gap-4">
          <label
            htmlFor="email"
            className="text-2xl font-black col-span-1 underline text-blue-300"
          >
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Deja tu mensaje "
            className="border-2 border-white p-2 rounded-lg col-span-3 h-45 text-lg"
            onChange={handleChange}
            value={field.message}
          />
        </div>
        {alert && (
          <p className="text-center text-xl p-2 mt-6 bg-rose-700 w-full uppercase font-bold shadow-lg">
            {alert}
          </p>
        )}
        <input
          type="submit"
          value="Enviar"
          className="text-center text-xl p-2 mt-6 bg-blue-700 w-full hover:bg-blue-800 uppercase font-bold shadow-lg hover:cursor-pointer"
        />
      </form>
    </div>
  );
}
