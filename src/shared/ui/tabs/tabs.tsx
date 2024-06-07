import { FC } from 'react';

import { IconName } from '../../constants';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';

import styles from './tabs.module.scss';
type TabsProps = {
    buttons: { label: string; onClick: () => void; withIcon: boolean }[];
    content: JSX.Element;
};

export const Tabs: FC<TabsProps> = ({ content, buttons }) => {
    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__buttons}>
                {buttons.map((btn) => {
                    const { label, onClick, withIcon } = btn;
                    return (
                        <Button key={label} onClick={onClick}>
                            {withIcon && <Icon name={IconName.STAR_SOLID} />}
                            {label}
                        </Button>
                    );
                })}
            </div>

            <div className={styles.tabs__item_content}>{content}</div>
        </div>
    );
};
