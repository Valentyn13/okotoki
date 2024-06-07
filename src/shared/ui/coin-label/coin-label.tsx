import { FC } from 'react';

import styles from './coin-label.module.scss';

type CoinLabelProps = {
    children: string;
};

export const CoinLabel: FC<CoinLabelProps> = ({ children }) => {
    return (
        <div className={styles.coinLabel}>
            <span>{children}</span>
        </div>
    );
};
