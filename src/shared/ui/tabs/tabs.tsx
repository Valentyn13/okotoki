import { FC } from 'react';

import styles from './tabs.module.scss';
type TabsProps = {
    controll: JSX.Element[];
    content: JSX.Element;
};

export const Tabs: FC<TabsProps> = ({ controll, content }) => {
    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__buttons}>
                {controll.map((item) => item)}
            </div>

            <div className={styles.tabs__item_content}>{content}</div>
        </div>
    );
};
