export default function Layout({ children, users, notification, revenue }) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{revenue}</div>
        <div>{users}</div>
        <div>{notification}</div>
      </div>
    </>
  );
}
