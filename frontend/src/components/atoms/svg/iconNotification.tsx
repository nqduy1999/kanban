export function NotificationIcon({
  isActive,
  className,
}: {
  isActive: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10.4446C21 8.85328 20.3679 7.32716 19.2426 6.20194C18.1174 5.07672 16.5913 4.44458 15 4.44458C13.4087 4.44458 11.8826 5.07672 10.7574 6.20194C9.63214 7.32716 9 8.85328 9 10.4446C9 17.4446 6 19.4446 6 19.4446H24C24 19.4446 21 17.4446 21 10.4446Z"
        fill={isActive ? "#3865E0" : "rgb(229 231 235)"}
        stroke={isActive ? "#3865E0" : "rgb(229 231 235)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.73 23.4446C16.5542 23.7477 16.3019 23.9992 15.9982 24.1741C15.6946 24.349 15.3504 24.441 15 24.441C14.6496 24.441 14.3054 24.349 14.0018 24.1741C13.6982 23.9992 13.4458 23.7477 13.27 23.4446"
        stroke={isActive ? "#3865E0" : "rgb(229 231 235)"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
