import { XIcon, LightningBoltIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React from "react";
import toast from "react-hot-toast";

function SampleMessage(props: any) {
  const { t } = props;
  return (
    <div
      className={classNames([
        "notificationWrapper",
        t.visible ? "top-0" : "-top-96",
      ])}
    >
      <div className="iconWrapper">
        <LightningBoltIcon />
      </div>
      <div className="contentWrapper">
        <h1>New version available</h1>
        <p>
          An improved version of VESSEL is now available, refresh to update.
        </p>
      </div>
      <div className="closeIcon" onClick={() => toast.dismiss(t.id)}>
        <XIcon />
      </div>
    </div>
  );
}

export const notify = () =>
  toast.custom((t) => <SampleMessage t={t} />, {
    id: "unique-notification",
    position: "top-center",
  });
