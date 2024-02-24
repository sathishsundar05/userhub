import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ListProp } from "../types";

const ListComponent: React.FC<ListProp> = ({ label, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingX: "30px",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          paddingTop: "15px",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        {label}:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          paddingTop: "15px",
          textTransform: "capitalize",
          paddingLeft: "10px",
        }}
      >
        {text ? text : '-'}
      </Typography>
    </Box>
  );
};

export default ListComponent;
