import { cn } from '@utils/cn.ts';
import { Textarea } from '../Textarea';
import type { ComponentProps } from 'react';

export function InputGroupTextarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0' +
          ' dark:bg-transparent min-h-[116px]',
        className,
      )}
      {...props}
    />
  );
}
