export const formatSchemaError = (
  descriptor: string,
  errorValue: string | Error
): string => `${descriptor}: ${errorValue}`;

export const throwSchemaError = (message: string, error: Error): void => {
  throw new Error(formatSchemaError(message, error));
};
