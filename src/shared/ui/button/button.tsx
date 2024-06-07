import { FC } from 'react';
import clsx from 'clsx';

import styles from './button.module.scss';

type ButtonProps = {
    onClick: () => void;
    active: boolean;
    className?: string;
};

export const Button: FC<ButtonProps> = ({ onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(styles.button, className)}
        ></button>
    );
};
