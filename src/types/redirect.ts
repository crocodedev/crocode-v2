export type TRedirect = {
  fromPath: string;
  toPath: string;
  statusCode: number;
  force: boolean;
  ingoreCase: boolean;
  redirectInBrowser: boolean;
};
