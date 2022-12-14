export function AddIcon({
  isActive,
  className,
}: {
  isActive: boolean;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={isActive ? "#3865E0" : "rgb(229 231 235)"}
      className={className}
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}
