import { ButtonProps } from "@mui/material/Button";
import { ButtonLinkProps } from "@components/Buttons/LinkButton";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

interface ButtonConfigType {
    route: string;
    buttonProps?: ButtonProps; // Allow custom button props
}

export const ButtonConfig: Record<string, ButtonLinkProps> = {
    app: {
        variant: "contained",
        href: "/app",
        children: <>Launch App</>,
        Icon: () => <ArrowForwardIcon/>
    },
    docs: {
        variant: "outlined",
        href: "/docs",
        children: <>Read Docs</>,
        Icon: () => <InsertDriveFileIcon/>
    }
};