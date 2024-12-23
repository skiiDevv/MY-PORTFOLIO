import React, { MouseEvent, ReactElement } from "react";
import styles from "./style.module.scss"

interface PortfolioButtonProps {
    label: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    variant: "outline" | "primary" | "danger";
    disabled?: boolean;
    icon?: ReactElement;
}

const PortfolioButton: React.FC<PortfolioButtonProps> = ({
    label, onClick, variant, disabled, icon
}) => {
  return (
    <div className={styles.btn_cont}>
        <button
         className={[styles[variant], styles.btn].join(" ")}
         onClick={onClick}
         disabled={disabled}
       >
         {label}
         {icon && icon}
        </button>
    </div>
  )
}

export default PortfolioButton