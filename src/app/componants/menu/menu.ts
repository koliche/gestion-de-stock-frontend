export interface Menu{
  id?:string,
  titer?:string,
  icon?:string,
  url?:string,
  sousMenu?:Array<Menu>;
}
