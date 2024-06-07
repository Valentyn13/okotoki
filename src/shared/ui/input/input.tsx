import { FC, InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ onChange, ...props }) => {
    return (
        <input
            {...props}
            onChange={onChange}
            className={styles.input}
            type="text"
        />
    );
};
