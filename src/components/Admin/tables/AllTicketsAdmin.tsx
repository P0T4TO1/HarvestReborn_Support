"use client";

import { useState, useMemo, useCallback, Key, ChangeEvent } from "react";
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
} from "@nextui-org/react";
import { ITicket } from "@/interfaces";
import { FaChevronDown, FaEdit, FaRegTrashAlt, FaSearch } from "react-icons/fa";

interface Props {
  tickets: ITicket[];
}

const columns = [
  { name: "ID", uid: "id_ticket", sortable: true },
  { name: "TIPO", uid: "tipo", sortable: true },
  { name: "ESTADO", uid: "estado", sortable: true },
  { name: "PRIORIDAD", uid: "prioridad", sortable: true },
  { name: "FECHA", uid: "fecha_inicio", sortable: true },
  { name: "ACCIONES", uid: "acciones", sortable: false },
];

const INITIAL_VISIBLE_COLUMNS = [
  "id_ticket",
  "tipo",
  "estado",
  "prioridad",
  "fecha_inicio",
  "acciones",
];

export const TableTickets = ({ tickets }: Props) => {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "fecha_orden",
    direction: "ascending",
  });

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredOrders = [...tickets];

    if (hasSearchFilter) {
      filteredOrders = filteredOrders.filter((mergeOrder) =>
        mergeOrder.id_ticket.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredOrders;
  }, [tickets, filterValue, hasSearchFilter]);

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
        (a[column as keyof ITicket] ?? "") < (b[column as keyof ITicket] ?? "")
      ) {
        return direction === "ascending" ? -1 : 1;
      }
      if (
        (a[column as keyof ITicket] ?? "") > (b[column as keyof ITicket] ?? "")
      ) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((ticket: ITicket, columnKey: Key) => {
    const cellValue = ticket[columnKey as keyof ITicket];

    switch (columnKey) {
      case "id_ticket":
        return <>{ticket.id_ticket}</>;
      case "tipo":
        return <>{ticket.tipo}</>;
      case "estado":
        return <>{ticket.estado}</>;
      case "prioridad":
        return <>{ticket.prioridad}</>;
      case "fecha_inicio":
        return <>{ticket.fecha_inicio}</>;
      case "acciones":
        return (
          <div className="flex items-center gap-2">
            <Tooltip content="Editar">
              <FaEdit className="text-blue-800 cursor-pointer" size={20} />
            </Tooltip>
            <Tooltip content="Eliminar">
              <FaRegTrashAlt
                className="text-red-800 cursor-pointer"
                size={20}
              />
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

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por cliente..."
            startContent={<FaSearch size={20} />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
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
            Total de clientes: {tickets.length}
          </span>
        </div>
      </div>
    );
  }, [filterValue, visibleColumns, onSearchChange, tickets.length, onClear]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "Todos los clientes seleccionados"
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
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No hay tickets 😭"} items={sortedItems}>
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
  );
};
