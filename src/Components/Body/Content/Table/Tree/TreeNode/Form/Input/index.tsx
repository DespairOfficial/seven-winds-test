import React from 'react';
import styles from './Input.styles.module.scss';
interface InputProps<T> {
	type: string;
	editingRowId: number;
	nodeId: number;
	state: T;
	setState: React.Dispatch<React.SetStateAction<T>>;
}
type StateType = string | number;
const Input = <T extends StateType>({
	editingRowId,
	nodeId,
	state,
	setState,
	type,
}: InputProps<T>): React.ReactElement => {
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setState(() => {
			return value as T;
		});
	};
	return (
		<input
			className={typeof state === 'string' ? styles.longRow : null}
			required
			disabled={editingRowId !== nodeId}
			type={type}
			value={state}
			onChange={(e) => {
				onChangeInput(e);
			}}
		/>
	);
};
export default Input;
