import theme from "../../../stylesTheme/Theme";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{
          background: "#fff",
          height: "20px",
        }}
      >
        <div
          style={{
            fontSize: ".7rem",
            fontWeight: "500",
            color: theme.text.primary,
            textAlign: "right",
            width: "100%",
            marginRight: "1.5rem",
          }}
        >
          {new Date().getFullYear()} &copy; System Broker
        </div>
      </div>
    </>
  );
};

export default Footer;
