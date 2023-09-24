export function ValidateParamsId(id: any): boolean {
  if (id.match(/\d+/)) return true;
  else return false;
}
