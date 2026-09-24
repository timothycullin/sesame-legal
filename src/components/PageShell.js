import styles from "./PageShell.module.css";

export default function PageShell({
  children,
  width = "content",
  variant = "default",
  className = "",
  ...props
}) {
  const classes = [
    styles.shell,
    styles[width],
    styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <main className={classes} {...props}>{children}</main>;
}
