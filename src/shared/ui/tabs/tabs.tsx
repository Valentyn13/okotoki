/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';

import styles from './tabs.module.scss';

const TABS = [
    {
        title: 'Tab 1',
        content: 'Content 1',
    },
    {
        title: 'Tab 2',
        content: 'Content 2',
    },
];

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__buttons}>
                {TABS.map((tab, index) => {
                    return (
                        <div
                            onClick={() => setActiveTab(index)}
                            key={index}
                            className={styles.tabs__item}
                        >
                            {tab.title}
                        </div>
                    );
                })}
            </div>

            <div className={styles.tabs__item_content}>
                {TABS[activeTab].content}
            </div>
        </div>
    );
};
