import styles from './Options.styles.module.scss';
import { FileIcon, Trash, Folder, Folder2 } from '../../../../../../../Icons';
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
					color={'#5F98F5'}
				/>
			)}

			{depth == 2 && (
				<Option
					onClickMethod={onAdd}
					Icon={Folder2}
					onClickId={parentId}
					color={'#95FFAC'}
				/>
			)}
			{depth < 2 && isHovered && (
				<Option
					onClickMethod={onAdd}
					Icon={Folder2}
					onClickId={node.id}
					color={'#95FFAC'}
				/>
			)}
			{depth == 3 && (
				<Option
					onClickMethod={onAdd}
					Icon={FileIcon}
					onClickId={parentId}
					color={'#7890B2'}
				/>
			)}

			{depth < 3 && isHovered && (
				<Option
					onClickMethod={onAdd}
					Icon={FileIcon}
					onClickId={node.id}
					color={'#7890B2'}
				/>
			)}
			{isHovered && (
				<Option
					onClickMethod={onDelete}
					Icon={Trash}
					onClickId={node.id}
					color={'#DF4444'}
				/>
			)}
		</>
	);
};
export default Options;
