import React from 'react'

import { cn } from './cn'

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
))
Table.displayName = 'Table'

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn('border-b-4 border-black', className)}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      `h-10 bg-gray-600 p-2 text-left align-middle text-sm font-semibold text-white
      first-of-type:rounded-tl-md first-of-type:pl-4 last-of-type:rounded-tr-md
      last-of-type:pr-4`,
      className,
    )}
    {...props}
  />
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'bg-gray-600 p-2 text-base first-of-type:pl-4 last-of-type:pr-4',
      className,
    )}
    {...props}
  />
))
TableCell.displayName = 'TableCell'

export { Table, TableHead, TableCell, TableRow }
