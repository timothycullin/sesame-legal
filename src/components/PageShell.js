import styles from "./PageShell.module.css";

export default function PageShell({
  children,
  width = "content",
  className = "",
  ...props
}) {
  const classes = [
    styles.shell,
    styles[width],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <main className={classes} {...props}>{children}</main>;
}
