import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './drop-down-latout.module.scss';

type DropDownLayoutProps = {
    children: ReactNode;
    className?: string;
};

export const DropDownLayout: FC<DropDownLayoutProps> = ({
    children,
    className = '',
}) => {
    return <div className={clsx(styles.layout, className)}>{children}</div>;
};
