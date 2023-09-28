export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'neutral'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link';

export type AlertColor = 'warning' | 'error' | 'success' | 'info';

export type ObjColors = Record<string, Record<string, boolean>>;

export const BTN_COLORS: ObjColors = {
  primary: {
    'btn-primary': true,
  },
  secondary: {
    'btn-secondary': true,
  },
  accent: {
    'btn-accent': true,
  },
  neutral: {
    'btn-neutral': true,
  },
  warning: {
    'btn-warning': true,
  },
  error: {
    'btn-error': true,
  },
  success: {
    'btn-success': true,
  },
  info: {
    'btn-info': true,
  },
  ghost: {
    'btn-ghost': true,
  },
  link: {
    'btn-link': true,
  },
};

export const ALERT_COLORS: ObjColors = {
  warning: {
    'alert-warning': true,
  },
  error: {
    'alert-error': true,
  },
  success: {
    'alert-success': true,
  },
  info: {
    'alert-info': true,
  },
};