import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

type ButtonProps = {
    onClick: () => void;
    active?: boolean;
    className?: string;
    children: ReactNode;
};

export const Button: FC<ButtonProps> = ({
    onClick,
    active,
    children,
    className = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                styles.button,
                {
                    [styles.button__active]: active,
                },
                className,
            )}
        >
            {children}
        </button>
    );
};
