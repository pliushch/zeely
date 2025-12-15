import { cn } from '@utils/cn';
import type { ComponentProps } from 'react';

export function Textarea({ className, ...otherProps }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'font-medium p-4 border-neutral-200 placeholder:text-neutral-500 focus-visible:border-neutral-950' +
          ' focus-visible:ring-neutral-950/50 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40' +
          ' aria-invalid:border-red-500 dark:bg-neutral-200/30 flex field-sizing-content min-h-16 w-full rounded-md' +
          ' border bg-transparent p-4 text-base shadow-xs transition-[color,box-shadow] outline-none' +
          ' focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900 dark:dark:bg-neutral-800/30',
        className,
      )}
      {...otherProps}
    />
  );
}
