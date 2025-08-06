export default function Gallery({
  children,
  type,
}: {
  children: any;
  type: string;
}) {
  return <section className={type}>{children}</section>;
}
