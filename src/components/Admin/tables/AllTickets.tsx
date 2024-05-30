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
  Link,
  useDisclosure,
} from '@nextui-org/react';
import { DeleteTicketModal } from '../modals';

import { CgChevronDoubleDownR } from 'react-icons/cg';
import { PiDotsThreeCircleDuotone } from 'react-icons/pi';
import { MdPriorityHigh, MdLowPriority } from 'react-icons/md';
import { FaChevronDown, FaRegTrashAlt, FaSearch } from 'react-icons/fa';

import {
  columnsTableTickets as columns,
  statusColorMap,
  statusOptions,
  typeColorMap,
  typeOptions,
  priorityColorMap,
  priorityOptions,
} from '@/utils';
import { ITicket } from '@/interfaces';

interface Props {
  tickets: ITicket[];
  id_role?: number;
}

const INITIAL_VISIBLE_COLUMNS = [
  'id_ticket',
  'estado',
  'tipo',
  'prioridad',
  'fecha_inicio',
  'acciones',
];

export const TableTickets = ({ tickets, id_role }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>('all');
  const [typeFilter, setTypeFilter] = useState<Selection>('all');
  const [priorityFilter, setPriorityFilter] = useState<Selection>('all');
  const rowsPerPage = 10;
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'fecha_inicio',
    direction: 'ascending',
  });
  const [idTicket, setIdTicket] = useState<string | undefined>(undefined);

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredTickets = [...tickets];

    if (hasSearchFilter) {
      filteredTickets = filteredTickets.filter((mergeOrder) =>
        mergeOrder.id_ticket.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredTickets = filteredTickets.filter((ticket) =>
        Array.from(statusFilter).includes(ticket.estado)
      );
    }
    if (
      typeFilter !== 'all' &&
      Array.from(typeFilter).length !== typeOptions.length
    ) {
      filteredTickets = filteredTickets.filter((ticket) =>
        Array.from(typeFilter).includes(ticket.tipo)
      );
    }
    if (
      priorityFilter !== 'all' &&
      Array.from(priorityFilter).length !== priorityOptions.length
    ) {
      filteredTickets = filteredTickets.filter((ticket) =>
        Array.from(priorityFilter).includes(ticket.prioridad)
      );
    }

    return filteredTickets;
  }, [
    tickets,
    filterValue,
    hasSearchFilter,
    statusFilter,
    typeFilter,
    priorityFilter,
  ]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    const { column, direction } = sortDescriptor;

    return items.sort((a, b) => {
      if (
        (a[column as keyof ITicket] ?? '') < (b[column as keyof ITicket] ?? '')
      ) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (
        (a[column as keyof ITicket] ?? '') > (b[column as keyof ITicket] ?? '')
      ) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((ticket: ITicket, columnKey: Key) => {
    const cellValue = ticket[columnKey as keyof ITicket];

    switch (columnKey) {
      case 'id_ticket':
        return (
          <>
            {id_role === 1 || id_role === 6 ? (
              <Link
                href={`/dashboard/admin/tickets/${ticket.id_ticket}`}
                size="sm"
                underline="always"
                color="foreground"
              >
                {ticket.id_ticket}
              </Link>
            ) : (
              <Link
                href={`/dashboard/tickets/${ticket.id_ticket}`}
                size="sm"
                underline="always"
                color="foreground"
              >
                {ticket.id_ticket}
              </Link>
            )}
          </>
        );
      case 'tipo':
        return (
          <Chip
            size="sm"
            variant="dot"
            color={typeColorMap[ticket.tipo] as ChipProps['color']}
          >
            {ticket.tipo}
          </Chip>
        );
      case 'estado':
        return (
          <Chip
            size="sm"
            variant="flat"
            color={statusColorMap[ticket.estado] as ChipProps['color']}
          >
            {ticket.estado}
          </Chip>
        );
      case 'prioridad':
        return (
          <Chip
            size="sm"
            variant="flat"
            color={priorityColorMap[ticket.prioridad] as ChipProps['color']}
            startContent={
              ticket.prioridad === 'INMEDIATA' ? (
                <MdPriorityHigh />
              ) : ticket.prioridad === 'BAJA' ? (
                <MdLowPriority />
              ) : ticket.prioridad === 'MEDIA' ? (
                <PiDotsThreeCircleDuotone />
              ) : (
                <CgChevronDoubleDownR />
              )
            }
          >
            {ticket.prioridad}
          </Chip>
        );
      case 'fecha_inicio':
        return (
          <>
            {new Date(ticket.fecha_inicio.toString()).toLocaleDateString(
              'es-MX',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}
          </>
        );
      case 'acciones':
        return (
          <div className="flex items-center gap-4">
            <Tooltip content="Eliminar">
              <Button
                variant="light"
                color="danger"
                isIconOnly
                onPress={() => {
                  setIdTicket(ticket.id_ticket);
                  onOpen();
                }}
              >
                <FaRegTrashAlt size={20} />
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
            placeholder="Buscar por id ticket..."
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
                {typeOptions.map((type) => (
                  <DropdownItem key={type.uid} className="capitalize">
                    {type.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaChevronDown size={20} />} variant="flat">
                  Prioridad
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={priorityFilter}
                selectionMode="multiple"
                onSelectionChange={setPriorityFilter}
              >
                {priorityOptions.map((priority) => (
                  <DropdownItem key={priority.uid} className="capitalize">
                    {priority.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaChevronDown size={20} />} variant="flat">
                  Estado
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name.toUpperCase()}
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
            Total de tickets: {tickets.length}
          </span>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onSearchChange,
    tickets.length,
    onClear,
    statusFilter,
    typeFilter,
    priorityFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === 'all'
            ? 'Todos los tickets seleccionados'
            : `${selectedKeys.size} de ${filteredItems.length} tickets seleccionados`}
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
    <>
      {idTicket && (
        <DeleteTicketModal
          useDisclosure={{ isOpen, onClose }}
          id_ticket={idTicket}
        />
      )}
      <div className=" w-full flex flex-col gap-4">
        <Table
          aria-label="Example table with custom cells, pagination and sorting"
          isHeaderSticky
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
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
          <TableBody emptyContent={'No hay tickets 😭'} items={sortedItems}>
            {(item) => (
              <TableRow key={item.id_ticket}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey) as any}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};
