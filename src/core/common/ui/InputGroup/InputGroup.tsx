import { cn } from '@utils/cn.ts';
import type { ComponentProps } from 'react';

export function InputGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border' +
          ' shadow-xs transition-[color,box-shadow] outline-none h-9 min-w-0 has-[>textarea]:h-auto flex-col',
        className,
      )}
      {...props}
    />
  );
}
