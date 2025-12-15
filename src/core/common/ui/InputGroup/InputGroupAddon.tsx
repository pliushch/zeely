import { cn } from '@utils/cn.ts';
import type { ComponentProps } from 'react';

export function InputGroupAddon({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      className={cn(
        'text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 text-sm' +
          ' font-medium' +
          " select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)]" +
          ' group-data-[disabled=true]/input-group:opacity-50 order-last w-full justify-start [.border-t]:pt-3' +
          ' group-has-[>input]/input-group:pb-2.5 order-last w-full [.border-t]:pt-3' +
          ' group-has-[>input]/input-group:pb-2.5 justify-between pr-2 pt-[20px] pb-[9px]',
        className,
      )}
      {...props}
    />
  );
}
