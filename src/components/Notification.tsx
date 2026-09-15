import { Fragment, useEffect } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import type { NotificationType } from "../types";

type NotificationProps = { notification: NotificationType; setNotification: React.Dispatch<React.SetStateAction<NotificationType>> };

export default function Notification({ notification, setNotification }: NotificationProps) {
  useEffect(() => {
    if (!notification.show) return;
    const timeout = window.setTimeout(() => setNotification((current) => ({ ...current, show: false })), 8000);
    return () => window.clearTimeout(timeout);
  }, [notification.show, setNotification]);

  return <div aria-live="assertive" className="pointer-events-none fixed inset-0 z-[110] flex items-end px-4 py-6 sm:items-start sm:p-6"><div className="flex w-full flex-col items-center sm:items-end">
    <Transition show={notification.show} as={Fragment} enter="transform ease-out duration-300 transition" enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enterTo="translate-y-0 opacity-100 sm:translate-x-0" leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className="pointer-events-auto flex w-full max-w-sm items-center gap-3 border border-border bg-card p-4 shadow-2xl">
        {notification.isError ? <XCircleIcon className="size-7 shrink-0 text-red-400" /> : <CheckCircleIcon className="size-7 shrink-0 text-primary" />}
        <p className="flex-1 text-sm text-text-muted">{notification.message}</p>
        <button type="button" className="text-text-soft hover:text-primary" onClick={() => setNotification((current) => ({ ...current, show: false }))}><span className="sr-only">Cerrar</span><XMarkIcon className="size-5" /></button>
      </div>
    </Transition>
  </div></div>;
}
