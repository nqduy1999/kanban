import { capitalizeFirstLetter } from "@/utils/letter";
import { XIcon, CheckIcon, LightningBoltIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React from "react";
import toast, { ErrorIcon, ToastPosition, ToastType } from "react-hot-toast";

interface IMessage {
  t: any;
  type: ToastType;
  title?: string;
}

const renderIcon = (type: ToastType) => {
  switch (type) {
    case "success":
      return <CheckIcon className="text-lime-600 w-5 h-5" />;
    case "error":
      return <ErrorIcon className="text-red-600 w-5 h-5" />;
    case "blank":
      return;
    default:
      return <LightningBoltIcon className="text-white w-5 h-5" />;
  }
};
const SampleMessage = (props: IMessage) => {
  const { t, type, title } = props;
  return (
    <div
      className={classNames([
        "notificationWrapper",
        type ? `notificationWrapper-default` : `notificationWrapper-${type}`,
        t.visible ? "top-0" : "-top-96",
      ])}
    >
      <div className="iconWrapper">{renderIcon(type)}</div>
      <div className="contentWrapper">
        <h1>{capitalizeFirstLetter(type || "Notification")}</h1>
        <p>{title}</p>
      </div>
      <div className="closeIcon" onClick={() => toast.dismiss(t.id)}>
        <XIcon className="text-white w-5 h-5 dark:text-stone-900" />
      </div>
    </div>
  );
};

export const notify = (
  type?: ToastType,
  position?: ToastPosition,
  title?: string
) =>
  toast.custom(
    (t) => <SampleMessage type={type as ToastType} t={t} title={title} />,
    {
      id: "unique-notification",
      position: position,
      duration: 1500,
    }
  );
