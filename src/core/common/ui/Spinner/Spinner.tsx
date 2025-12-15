import type { ComponentProps } from 'react';
import { cn } from '@utils/cn';
import { Typography } from '../Typography';

type SpinnerProps = {
  value?: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
} & ComponentProps<'div'>;

export function Spinner({
  className,
  value = 0,
  size = 120,
  strokeWidth = 8,
  showValue = true,
  ...props
}: SpinnerProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-green-400 transition-all duration-500 ease-in-out"
        />
      </svg>

      {showValue && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Typography variant="smallMedium" className="text-white">{Math.round(value)}%</Typography>
        </div>
      )}
    </div>
  );
}
