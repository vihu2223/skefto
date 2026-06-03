const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-[var(--shadow-purple-glow)] focus-visible:ring-primary",
  outline:
    "border-2 border-primary text-primary bg-transparent hover:bg-primary-light focus-visible:ring-primary",
  "outline-teal":
    "border-2 border-teal text-teal bg-white hover:bg-teal/5 focus-visible:ring-teal",
  "outline-purple":
    "border-2 border-primary text-primary bg-white shadow-[var(--shadow-purple-glow)] hover:bg-primary-light focus-visible:ring-primary",
  ghost:
    "text-muted hover:text-navy bg-transparent focus-visible:ring-primary",
  white:
    "bg-white text-primary hover:bg-white/90 shadow-sm focus-visible:ring-white",
  "white-outline":
    "border-2 border-white text-white bg-transparent hover:bg-white/10 focus-visible:ring-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-8 py-3.5 text-base font-semibold",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  icon,
  pill = false,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    pill ? "rounded-full" : "rounded-xl",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
