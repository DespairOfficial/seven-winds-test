import { useEffect, useState } from 'react';
import styles from './Tree.style.module.scss';
import { Row } from '../../../../../interfaces/Row';
import TreeNode from './TreeNode/TreeNode';

interface TreeProps {
	treeData: Row[];
	depth: number;
	parentId: number | null;
	editingRowId: number;
	setEditingRowId: React.Dispatch<React.SetStateAction<number>>;
	onDelete: (id: number) => void;
	onUpdate: (
		id: number,
		rowName: string,
		salary: number,
		equipmentCosts: number,
		supportCosts: number,
		estimatedProfit: number
	) => void;
	onAdd: (parentId: number | null) => void;
}
const Tree = ({
	treeData,
	depth,
	parentId,
	editingRowId,
	setEditingRowId,
	onDelete,
	onUpdate,
	onAdd,
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
					/>
				);
			})}
		</div>
	);
};
export default Tree;
