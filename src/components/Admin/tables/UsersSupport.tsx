'use client';

import { useState, useMemo, useCallback, Key } from 'react';
import { useSession } from 'next-auth/react';

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
} from '@nextui-org/react';
import { toast } from 'sonner';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import { DANGER_TOAST, SUCCESS_TOAST } from '@/components/ui';

import { IUser } from '@/interfaces';
import { hrSupportApi } from '@/api';
import { columnsTableUsers as columns } from '@/utils';

const INITIAL_VISIBLE_COLUMNS = ['id', 'nombre', 'apellidos', 'email'];

interface Props {
  users: IUser[];
  id_ticket: string;
}

export const UsersSupport = ({ users, id_ticket }: Props) => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const rowsPerPage = 10;
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: 'nombre',
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
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.id.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [users, filterValue, hasSearchFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    const { column, direction } = sortDescriptor;

    return items.sort((a, b) => {
      if ((a[column as keyof IUser] ?? '') < (b[column as keyof IUser] ?? '')) {
        return direction === 'ascending' ? -1 : 1;
      }
      if ((a[column as keyof IUser] ?? '') > (b[column as keyof IUser] ?? '')) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [sortDescriptor, items]);

  const assignUser = (id_user: string, id_ticket: string) => {
    setIsLoading(true);
    try {
      hrSupportApi
        .put('/admin/tickets/assign', {
          id_user_support: id_user,
          id_ticket,
        })
        .then((response) => {
          console.log(response);
          toast('Usuario asignado correctamente', SUCCESS_TOAST);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          toast('Error al asignar el usuario', DANGER_TOAST);
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      toast('Error al asignar el usuario', DANGER_TOAST);
      setIsLoading(false);
    }
  };

  const renderCell = useCallback((user: IUser, columnKey: Key) => {
    const cellValue = user[columnKey as keyof IUser];

    switch (columnKey) {
      case 'id':
        return (
          <Button
            variant="light"
            className="underline"
            onPress={() => assignUser(user.id, id_ticket)}
          >
            {user.id}
          </Button>
        );
      case 'nombre':
        return (
          <>
            {user.id === session?.user.id ? `${user.nombre}(Yo)` : user.nombre}
          </>
        );
      case 'apellidos':
        return <>{user.apellidos}</>;
      case 'email':
        return <>{user.email}</>;
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
            placeholder="Buscar por id..."
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
            Total de usuarios: {users.length}
          </span>
        </div>
      </div>
    );
  }, [filterValue, visibleColumns, onSearchChange, users.length, onClear]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === 'all'
            ? 'Todos los usuarios seleccionados'
            : `${selectedKeys.size} de ${filteredItems.length} usuarios seleccionados`}
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
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <div className="w-10 h-10 border-2 border-t-2 border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}
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
        <TableBody emptyContent={'No hay usuarios 😭'} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
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
