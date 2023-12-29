import Link from "next/link";

export default function Start() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Landing Page</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "60px",
        }}
      >
        <Link
          href={"./signin"}
          style={{
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
            width: "100px",
            backgroundColor: "lightgray",
            textDecoration: "none",
            color: "darkblue",
          }}
        >
          <h2>SignIn</h2>
        </Link>

        <Link
          href={"./signup"}
          style={{
            cursor: "pointer",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
            width: "100px",
            backgroundColor: "lightgray",
            textDecoration: "none",
            color: "darkblue",
          }}
        >
          <h2>SignUp</h2>
        </Link>
      </div>
    </div>
  );
}
