import { FC, InputHTMLAttributes } from 'react';

import styles from './input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ ...props }) => {
    return <input {...props} className={styles.input} type="text" />;
};
