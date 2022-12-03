import TreeNode from './TreeNode/TreeNode';
import { TreeProps } from './Tree.types';
import '../Lines.scss'

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
	isFetching
}: TreeProps) => {
	return (
		<div className='tree'>
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
						isFetching={isFetching}
					/>
				);
			})}
		</div>
	);
};
export default Tree;
