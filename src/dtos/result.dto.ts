export class ResultDto<T = any> {
  timestamp: string;
  constructor(
    public success: boolean,
    public data?: T,
    public message?: string | null,
    public errors?: any,
  ) {
    this.timestamp = new Date().toISOString();
  }
}
