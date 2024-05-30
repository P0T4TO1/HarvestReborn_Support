'use client';

import { useState, useMemo, useCallback, Key } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Selection,
  SortDescriptor,
  Tooltip,
  Chip,
  ChipProps,
} from '@nextui-org/react';
import { FaChevronDown, FaEdit, FaRegTrashAlt, FaSearch } from 'react-icons/fa';
import {
  columnsTableFAQ as columns,
  typeFAQOptions as typeOptions,
  typeFAQColorMap as typeColorMap,
} from '@/utils';

import { IPreguntas } from '@/interfaces';

const INITIAL_VISIBLE_COLUMNS = ['id_prefrec', 'pregunta', 'tipo', 'actions'];

interface TableFaqsProps {
  questions: IPreguntas[];
}

export const TableFaq = ({ questions }: TableFaqsProps) => {
  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [typeFilter, setTypeFilter] = useState<Selection>('all');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'tipo',
    direction: 'ascending',
  });

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredQuestions = [...questions];

    if (hasSearchFilter) {
      filteredQuestions = filteredQuestions.filter((question) =>
        question.pregunta.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      typeFilter !== 'all' &&
      Array.from(typeFilter).length !== typeOptions.length
    ) {
      filteredQuestions = filteredQuestions.filter((question) =>
        Array.from(typeFilter).includes(question.tipo)
      );
    }

    return filteredQuestions;
  }, [questions, filterValue, hasSearchFilter, typeFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [filteredItems, page, rowsPerPage]);

  const sortedItems = useMemo(() => {
    const { column, direction } = sortDescriptor;

    return items.sort((a, b) => {
      if (
        (a[column as keyof IPreguntas] ?? '') <
        (b[column as keyof IPreguntas] ?? '')
      ) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (
        (a[column as keyof IPreguntas] ?? '') >
        (b[column as keyof IPreguntas] ?? '')
      ) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [items, sortDescriptor]);

  const renderCell = useCallback((question: IPreguntas, columnKey: Key) => {
    const cellValue = question[columnKey as keyof IPreguntas];

    switch (columnKey) {
      case 'id_prefrec':
        return cellValue;
      case 'pregunta':
        return cellValue;
      case 'tipo':
        return (
          <Chip
            size="md"
            classNames={{
              base: `bg-${typeColorMap[question.tipo]}-600 bg-opacity-20`,
              content: `text-${typeColorMap[question.tipo]}-600`,
            }}
          >
            {question.tipo.charAt(0) + question.tipo.slice(1).toLowerCase()}
          </Chip>
        );
      case 'actions':
        return (
          <div className="flex gap-2">
            <Tooltip content="Editar" placement="top">
              <Button size="sm" variant="flat" onPress={() => {}}>
                <FaEdit size={16} />
              </Button>
            </Tooltip>
            <Tooltip content="Eliminar" placement="top">
              <Button size="sm" variant="flat" onPress={() => {}}>
                <FaRegTrashAlt size={16} />
              </Button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por pregunta..."
            startContent={<FaSearch size={20} />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaChevronDown size={20} />} variant="flat">
                  Tipo
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={typeFilter}
                selectionMode="multiple"
                onSelectionChange={setTypeFilter}
              >
                {typeOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaChevronDown size={20} />} variant="flat">
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total de clientes: {questions.length}
          </span>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onSearchChange,
    questions.length,
    onClear,
    typeFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === 'all'
            ? 'Todos los clientes seleccionados'
            : `${selectedKeys.size} de ${filteredItems.length} clientes seleccionados`}
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Anterior
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [
    selectedKeys,
    page,
    pages,
    filteredItems.length,
    onNextPage,
    onPreviousPage,
  ]);

  return (
    <div className=" w-full flex flex-col gap-4">
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={'No hay preguntas 😭'} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id_prefrec}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey) as any}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
