type BadgeProps = {
  children: React.ReactNode | string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const VariantColors = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
};

const Badge = ({ children, variant = "primary", onClick }: BadgeProps) => {
  return (
    <div
      className={`${VariantColors[variant]} text-[8px] p-2 rounded-3xl uppercase flex items-center justify-center cursor-pointer`}
      onClick={onClick ?? undefined}
    >
      <p className="font-bold">{children}</p>
    </div>
  );
};

export default Badge;
