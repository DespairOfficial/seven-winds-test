import TreeNode from './TreeNode/TreeNode';
import { TreeProps } from './Tree.types';
import '../Lines.scss';
import { v4 as uuidv4 } from 'uuid';

const Tree = ({
	treeData,
	depth,
	parentId,
	editingRowId,
	setEditingRowId,
	onDelete,
	onUpdate,
	onAdd,
	onCreate,
	isFetching,
}: TreeProps) => {
	return (
		<div className="tree">
			{treeData.map((node) => {
				return (
					<TreeNode
						key={uuidv4()}
						// key={node.id}
						node={node}
						depth={depth}
						editingRowId={editingRowId}
						setEditingRowId={setEditingRowId}
						parentId={parentId}
						onDelete={onDelete}
						onUpdate={onUpdate}
						onAdd={onAdd}
						onCreate={onCreate}
						isFetching={isFetching}
					/>
				);
			})}
		</div>
	);
};
export default Tree;
