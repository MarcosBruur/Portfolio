import { useState } from "react";
import type { FieldType, NotificationType } from "../types";
import { sendEmail } from "../services";
import Notification from "./Notification";

export default function Form() {
  const [alert, setAlert] = useState("");
  const [field, setField] = useState<FieldType>({
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState<NotificationType>({
    show: false,
    isError: false,
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.email)) {
      setAlert("El email ingresado no es válido");
      return;
    }

    const resp = await SendEmail(field.email, field.message);

    setField({
      email: "",
      message: "",
    });

    if (!resp.success) {
      setNotification({
        show: true,
        isError: true,
        message: "Error inesperado, vuelve a intentar más tarde :c ",
      });
      return;
    }

    setNotification({
      show: true,
      isError: false,
      message: "Email enviado exitosamente",
    });
  };

  return (
    <div className="inline-block px-5 py-10 lg:rounded-lg shadow-lg shadow-blue-500 border-y-3 lg:border-2 border-indigo-600 w-full lg:w-3/4">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-5 flex flex-col lg:grid lg:grid-cols-4 lg:items-center gap-4">
          <label
            htmlFor="email"
            className="text-2xl xl:text-4xl  font-black col-span-1 underline"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email@gmail.com"
            className="w-full border-2 text-center  border-white p-2 rounded-lg lg:col-span-3 text-lg xl:text-2xl"
            onChange={handleChange}
            value={field.email}
          />
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-start gap-4">
          <label
            htmlFor="message"
            className="text-2xl xl:text-4xl font-black col-span-1 underline "
          >
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Deja tu mensaje aquí"
            className="border-2 text-center border-white p-2 rounded-lg col-span-3 h-45 text-lg xl:text-2xl"
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
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
    </div>
  );
}
