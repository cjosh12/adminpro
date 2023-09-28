export type Size = 'lg' | 'md' | 'sm' | 'xs';

export type ObjSizes = Record<string, Record<string, boolean>>;

export const BTN_SIZE: ObjSizes = {
  lg: {
    'btn-lg': true
  },
  md: {
    'btn-md': true
  },
  sm: {
    'btn-sm': true
  },
  xs: {
    'btn-xs': true
  }
}