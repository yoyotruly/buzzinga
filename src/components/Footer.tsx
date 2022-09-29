import { Box } from "./Box";

export default function Footer() {
  return (
    <footer>
      <Box
        css={{
          width: "100%",
          height: "48px",
          position: "fixed",
          bottom: "0",
          borderTop: "1px solid #eaeaea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
        }}
      >
        Made with ❤️ by Yoyo Yang
      </Box>
    </footer>
  );
}
