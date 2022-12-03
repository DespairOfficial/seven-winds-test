import styles from './Option.styles.module.scss';
import { OptionProps } from './Option.types';

const Option = ({
	Icon,
	color,
	onClickMethod,
	onClickId,
	level,
}: OptionProps) => {
	return (
		<div
			className={styles.option}
			onClick={() => {
				if (onClickMethod) onClickMethod(onClickId);
				console.log(onClickId)
			}}
		>
			<Icon color={color} />
			{level && <div className={styles.level}>{level}</div>}
		</div>
	);
};
export default Option;
