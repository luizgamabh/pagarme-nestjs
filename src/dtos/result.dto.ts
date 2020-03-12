export class ResultDto<T = any> {
  timestamp: string;
  constructor(
    private success: boolean,
    private data?: T,
    private message?: string | null,
    private errors?: any,
  ) {
    this.timestamp = new Date().toISOString();
  }
}
