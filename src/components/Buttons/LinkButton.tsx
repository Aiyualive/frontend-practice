// Taken from dReader-frontend
import Button, { ButtonProps } from "@mui/material/Button";
import Link from "next/link";
import React from "react";

interface Props extends ButtonProps<'a'> {
    Icon?: React.FC
    blank?: boolean
}

export const ButtonLink: React.FC<Props> = ({ Icon, href, blank = false, children, ...props }) => {
    if (!href) return null;

    return (
        <Button
            {...props}
            LinkComponent={Link}
            target={blank ? '_blank' : undefined}
            href={href || '#'}
        >
            {children || (Icon && <Icon />)}
        </Button>
    );
};
