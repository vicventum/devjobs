export type HexadecimalColor = `#${string}`
export type VarColor = `rgb(var(${string}))`
export type Color = VarColor | HexadecimalColor
// export type HexadecimalColor = `${string}`
