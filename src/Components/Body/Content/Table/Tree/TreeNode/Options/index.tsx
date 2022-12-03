import styles from './Options.styles.module.scss';
import { FileIcon, Trash, Folder } from '../../../../../../../Icons';
import Option from './Option/index'
import { OptionsProps } from './Options.types';
const Options = ({depth,node,isHovered, parentId, onAdd, onDelete }: OptionsProps) => {
	return (
		<>
			{depth == 1 && (
				<Option
					onClickMethod={onAdd}
					Icon={Folder}
					onClickId={null}
					color={'#5f98f5'}
					level={depth}
				/>
			)}

			{depth == 2 && (
				<Option
					onClickMethod={onAdd}
					Icon={Folder}
					onClickId={parentId}
					color={'#95ffac'}
					level={depth}
				/>
			)}
			{depth < 2 && isHovered && (
				<Option
					onClickMethod={onAdd}
					Icon={Folder}
					onClickId={node.id}
					color={'#95ffac'}
					level={depth + 1}
				/>
			)}
			{depth == 3 && (
				<Option
					onClickMethod={onAdd}
					Icon={FileIcon}
					onClickId={parentId}
					color={'#7890b2'}
				/>
			)}

			{depth < 3 && isHovered && (
				<Option
					onClickMethod={onAdd}
					Icon={FileIcon}
					onClickId={node.id}
					color={'#7890b2'}
				/>
			)}
			{isHovered && (
				<Option
					onClickMethod={onDelete}
					Icon={Trash}
					onClickId={node.id}
					color={'#df4444'}
				/>
			)}
		</>
	);
};
export default Options;
