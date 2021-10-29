export interface DropdownProps {
  children: React.ReactNode;
}

export interface Measure {
  x: number;
  y: number;
  width: number;
  height: number;
  isTop?: boolean;
}

export const defaultMeasure: Measure = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  isTop: false,
};
