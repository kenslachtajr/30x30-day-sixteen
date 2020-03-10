export interface Shoe {
  id: number,
  title: string,
  details: string,
  coolLevel: number,
}

export const emptyShoe: Shoe = {
  id: null,
  title: '',
  details: '',
  coolLevel: null
}
