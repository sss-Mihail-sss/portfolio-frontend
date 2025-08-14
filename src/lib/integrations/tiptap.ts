import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import CodeBlock from '@tiptap/extension-code-block';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import { BulletList, ListItem, OrderedList } from '@tiptap/extension-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { CharacterCount, Placeholder } from '@tiptap/extensions';
import type { AnyExtension, Extensions } from '@tiptap/react';

export type ExtensionsEnum =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strike'
  | 'link'
  | 'code'
  | 'divider'
  | 'heading'
  | 'align'
  | 'blockquote'
  | 'highlight'
  | 'bullet-list'
  | 'ordered-list';

export const configureExtensions = ({
  extensions,
  placeholder,
  limit,
}: {
  extensions?: ExtensionsEnum[];
  placeholder?: string;
  limit?: number;
}): Extensions => {
  const baseExtensions: Extensions = [Document, Paragraph, Text, ListItem];

  if (placeholder) {
    baseExtensions.push(
      Placeholder.configure({
        placeholder,
        emptyEditorClass:
          'first:before:content-[attr(data-placeholder)] first:before:text-muted-foreground first:before:pointer-events-none first:before:h-0 first:before:float-left',
      }),
    );
  }

  if (limit) {
    baseExtensions.push(
      CharacterCount.configure({
        limit,
      }),
    );
  }

  if (extensions) {
    for (const extension of extensions) {
      if ('extension' in extensionMap) {
        baseExtensions.push(extensionMap[extension]);
      }
    }
  }

  return baseExtensions;
};

export const extensionMap: Record<ExtensionsEnum, AnyExtension> = {
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strike: Strike,
  blockquote: Blockquote,
  divider: HorizontalRule.configure({
    HTMLAttributes: {
      class: 'border-t-2 my-2',
    },
  }),
  highlight: Highlight.configure({
    multicolor: true,
  }),
  'bullet-list': BulletList.configure({
    HTMLAttributes: {
      class: 'list-inside list-disc [&>li>p]:inline',
    },
  }),
  'ordered-list': OrderedList.configure({
    HTMLAttributes: {
      class: 'list-inside list-decimal [&>li>p]:inline',
    },
  }),
  link: Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: 'https',
    protocols: ['http', 'https'],
    HTMLAttributes: {
      class: 'underline decoration-blue-600 text-blue-600',
    },
    isAllowedUri: (url, ctx) => {
      try {
        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`);

        if (!ctx.defaultValidate(parsedUrl.href)) {
          return false;
        }

        const disallowedProtocols = ['ftp', 'file', 'mailto'];
        const protocol = parsedUrl.protocol.replace(':', '');

        if (disallowedProtocols.includes(protocol)) {
          return false;
        }

        const allowedProtocols = ctx.protocols.map((p) => (typeof p === 'string' ? p : p.scheme));

        if (!allowedProtocols.includes(protocol)) {
          return false;
        }

        const disallowedDomains = ['example-phishing.com', 'malicious-site.net'];
        const domain = parsedUrl.hostname;

        return !disallowedDomains.includes(domain);
      } catch {
        return false;
      }
    },
    shouldAutoLink: (url) => {
      try {
        const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`);

        const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com'];
        const domain = parsedUrl.hostname;

        return !disallowedDomains.includes(domain);
      } catch {
        return false;
      }
    },
  }),
  code: CodeBlock.configure({
    HTMLAttributes: {
      class: 'text-sm bg-gray-800 text-white p-2 rounded',
    },
  }),
  heading: Heading.configure({
    levels: [1, 2, 3, 4, 5],
  }),
  align: TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
};
