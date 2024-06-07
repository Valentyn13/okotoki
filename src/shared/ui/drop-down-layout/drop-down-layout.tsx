import { FC } from 'react';
import clsx from 'clsx';

import styles from './drop-down-latout.module.scss';

type DropDownLayoutProps = {
    toggleElement: JSX.Element;
    className?: string;
};

export const DropDownLayout: FC<DropDownLayoutProps> = ({
    toggleElement,
    className = '',
}) => {
    return (
        <div className={clsx(styles.layout, className)}>{toggleElement}</div>
    );
};
