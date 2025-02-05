import { AnyExtension, Extensions } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Placeholder from '@tiptap/extension-placeholder';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Link from '@tiptap/extension-link';
import CodeBlock from '@tiptap/extension-code-block';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import Blockquote from '@tiptap/extension-blockquote';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item';

export type ExtensionsEnum =
  'bold'
  | 'italic'
  | 'underline'
  | 'strike'
  | 'link'
  | 'code'
  | 'heading'
  | 'align'
  | 'blockquote'
  | 'bullet-list'
  | 'ordered-list';

export const configureExtensions = (extensions?: ExtensionsEnum[], placeholder?: string): Extensions => {
  const baseExtensions: Extensions = [Document, Paragraph, Text, ListItem];

  if (placeholder) {
    baseExtensions.push(
      Placeholder.configure({
        placeholder,
        emptyNodeClass: 'before:content-[attr(data-placeholder)] before:text-muted-foreground before:pointer-events-none before:h-0 before:float-left',
      }),
    );
  }

  if (extensions) {
    extensions.forEach((ext) => extensionMap[ext] && baseExtensions.push(extensionMap[ext]));
  }

  return baseExtensions;
};

export const extensionMap: Record<ExtensionsEnum, AnyExtension> = {
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strike: Strike,
  blockquote: Blockquote,
  'bullet-list': BulletList.configure({
    HTMLAttributes: {
      class: 'list-inside list-disc [&>li>p]:inline',
    }
  }),
  'ordered-list': OrderedList.configure({
    HTMLAttributes: {
      class: 'list-inside list-decimal [&>li>p]:inline',
    }
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

        const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme));

        if (!allowedProtocols.includes(protocol)) {
          return false;
        }

        const disallowedDomains = ['example-phishing.com', 'malicious-site.net'];
        const domain = parsedUrl.hostname;

        if (disallowedDomains.includes(domain)) {
          return false;
        }

        return true;
      } catch {
        return false;
      }
    },
    shouldAutoLink: url => {
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
