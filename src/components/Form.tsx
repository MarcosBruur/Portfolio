import { useState } from "react";
import type { FieldType, NotificationType } from "../types";
import { sendEmail } from "../services";
import Notification from "./Notification";

export default function Form() {
  const [alert, setAlert] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [field, setField] = useState<FieldType>({ email: "", message: "" });
  const [notification, setNotification] = useState<NotificationType>({
    show: false,
    isError: false,
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setField((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setAlert("");
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(field).includes(""))
      return setAlert("Todos los campos son obligatorios");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.email))
      return setAlert("El email ingresado no es válido");
    setIsSending(true);
    try {
      const response = await sendEmail(field.email, field.message);
      if (!response.success)
        throw new Error(
          response.error ?? "Error inesperado, vuelve a intentar más tarde",
        );
      setField({ email: "", message: "" });
      setNotification({
        show: true,
        isError: false,
        message: "Mensaje enviado exitosamente",
      });
    } catch (error) {
      setNotification({
        show: true,
        isError: true,
        message:
          error instanceof Error
            ? error.message
            : "Error inesperado, vuelve a intentar más tarde",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="editor-panel w-full max-w-3xl">
      <div className="editor-filebar">
        <span className="text-primary">SH</span>contact.sh
      </div>
      <form onSubmit={handleSubmit} className="p-5 sm:p-8">
        <p className="mb-6 text-sm text-text-muted">
          <span className="text-primary">$</span> ./send-message --to marcos
        </p>
        <label htmlFor="email" className="block text-sm text-blue">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="tu@email.com"
          className="mt-2 w-full border border-border bg-bg-dark px-3 py-3 text-sm text-text outline-none placeholder:text-text-soft focus:border-primary"
          onChange={handleChange}
          value={field.email}
        />
        <label htmlFor="message" className="mt-5 block text-sm text-blue">
          mensaje
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Deja tu mensaje aquí"
          className="mt-2 h-44 w-full resize-y border border-border bg-bg-dark px-3 py-3 text-sm text-text outline-none placeholder:text-text-soft focus:border-primary"
          onChange={handleChange}
          value={field.message}
        />
        {alert && (
          <p className="mt-4 border border-red-500/60 bg-red-950/40 p-3 text-sm text-red-200">
            {alert}
          </p>
        )}
        <button
          type="submit"
          disabled={isSending}
          className="mt-5 w-full border border-primary bg-primary px-4 py-3 text-sm text-bg transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60 hover:cursor-pointer"
        >
          {isSending ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
    </div>
  );
}
