export function promised(obj: any): Promise<any> {
  switch ((obj || {}).constructor.name) {
    case 'Promise':
    case 'AsyncFunction':
      return obj.then(data => [null, data]).catch(err => [err]);
    default:
      return Promise.resolve(obj).then(() => [null, obj]);
  }
}
