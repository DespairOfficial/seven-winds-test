import styles from './TreeNode.style.module.scss';
import Tree from '../Tree';
import { TreeNodeProps } from './TreeNode.types';
import Options from './Options';
import Form from './Form';
import { useState } from 'react';

const TreeNode = (props: TreeNodeProps) => {
	let {
		node,
		depth,
		parentId,
		editingRowId,
		setEditingRowId,
		onDelete,
		onUpdate,
		onAdd,
		onCreate,
		isFetching,
	} = props;

	const [isHovered, setIsHovered] = useState<boolean>(false);

	depth += 1;
	const { child } = node;
	return (
		<>
			<div
				className={styles.main}
				onDoubleClick={() => {
					setEditingRowId(node.id);
				}}
			>
				<div className={styles.optionsWrapper}>
					<div
						className={styles.options}
						style={{
							paddingLeft: `${(depth - 1) * 2}rem`,
							pointerEvents:
								editingRowId === node.id && !isFetching ? 'none' : 'auto',
						}}
					>
						<div
							className={
								styles.icons + ' lined ' + `lined_${depth}`
							}
							onMouseEnter={() => {
								setIsHovered(true);
							}}
							onMouseLeave={() => {
								setIsHovered(false);
							}}
						>
							<Options
								isHovered={isHovered}
								node={node}
								parentId={parentId}
								depth={depth}
								onAdd={onAdd}
								onDelete={onDelete}
							/>
						</div>
					</div>
				</div>

				<Form
					node={node}
					setEditingRowId={setEditingRowId}
					onUpdate={onUpdate}
					onCreate={onCreate}
					editingRowId={editingRowId}
					parentId={parentId}
				/>
			</div>
			<Tree
				treeData={child}
				depth={depth}
				parentId={node.id}
				editingRowId={editingRowId}
				setEditingRowId={setEditingRowId}
				onDelete={onDelete}
				onUpdate={onUpdate}
				onAdd={onAdd}
				onCreate={onCreate}
				isFetching={isFetching}
			/>
		</>
	);
};
export default TreeNode;
