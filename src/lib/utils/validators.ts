export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is Record<string, unknown> {
  if (isNull(value) || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }

  return value.constructor.name === 'Object' || Object.getPrototypeOf(value) === null;
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

export function isBlob(value: unknown): value is Blob {
  return value instanceof Blob;
}

export function isFile(value: unknown): value is File {
  return value instanceof File;
}
