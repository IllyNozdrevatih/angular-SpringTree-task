export interface CatCard {
  id: string,
  url: string,
  width: number,
  height: number
}
export interface CatCardFavorite extends CatCard {
  favorite: boolean
}
