import { Alert } from "@mui/material";

export default function AlertMessage({ type, message}) {
  return (
    <Alert severity={type} style={{ marginTop: "10px" }}>
      {message}
    </Alert>
  )
}