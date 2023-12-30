import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";

export default function MainLayout() {
  return (
    <Box>
      <Navbar />
      <Outlet />
			{/* there might be footer */}
    </Box>
  );
}
