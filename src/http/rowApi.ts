import { CreateRowDto } from './../interfaces/CreateRow.dto';
import { UpdateRowDto } from './../interfaces/UpdateRow.dto';
import { Row } from './../interfaces/Row';
import { $host } from '.';
import { UpdateRowResultDto } from '../interfaces/UpdateRowResult.dto';

export async function getList() {
	return await $host.get('/row/list').then((response): Row[] => {
		return response.data;
	});
}
export async function createRow(createRowDto: CreateRowDto) {
	return await $host.post('/row/create', {...createRowDto}).then((response): UpdateRowResultDto => {
		return response.data;
	});
}
export async function deleteRow(rowId: number) {
	return await $host
		.delete(`/row/${rowId}/delete`)
		.then((response): UpdateRowResultDto => {
			return response.data;
		});
}
export async function updateRow(rowId: number, updateRowDto: UpdateRowDto) {
	return await $host
		.post(`/row/${rowId}/update`, { ...updateRowDto })
		.then((response): UpdateRowResultDto => {
			return response.data;
		});
}
