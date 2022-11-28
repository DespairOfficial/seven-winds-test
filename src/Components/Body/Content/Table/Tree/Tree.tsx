import TreeNode from './TreeNode/TreeNode';
import { TreeProps } from './Tree.types';

const Tree = ({
	treeData,
	depth,
	parentId,
	editingRowId,
	setEditingRowId,
	onDelete,
	onUpdate,
	onAdd,
	onCreate
}: TreeProps) => {
	return (
		<div>
			{treeData.map((node) => {
				return (
					<TreeNode
						key={Math.floor(Math.random() * 1000)}
						node={node}
						depth={depth}
						editingRowId={editingRowId}
						setEditingRowId={setEditingRowId}
						parentId={parentId}
						onDelete={onDelete}
						onUpdate={onUpdate}
						onAdd={onAdd}
						onCreate={onCreate}
					/>
				);
			})}
		</div>
	);
};
export default Tree;
