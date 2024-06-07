import clsx from 'clsx';

import styles from './icon-input.module.scss';

interface Properties {
    prependedIcon: JSX.Element;
    input: JSX.Element;
    className?: string;
}

export const IconInput = ({
    prependedIcon,
    input,
    className = '',
}: Properties): JSX.Element => {
    return (
        <div className={clsx(styles.wrapper, className)}>
            {prependedIcon}
            {input}
        </div>
    );
};
