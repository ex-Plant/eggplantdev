const arrow = (
  <svg aria-hidden="true" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L9 9M9.5 8.5L1 17" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const close = (
  <svg
    aria-hidden="true"
    className="stroke-red"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const ToggleIcon = ({ open, className }: { open: boolean; className?: string }) => {
  return (
    <>
      <span className={`flex items-center ${className} `}>{!open ? arrow : close}</span>
    </>
  );
};
