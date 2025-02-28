declare type AnyData = Record<string, any>;
declare type UniqueIdentifier = string | number;

declare type DndBlock = {
  id: UniqueIdentifier;
  slug: string;
  props: {
    className?: string;
    [key: string]: string | number | undefined;
  }
  items?: Block[];
}
