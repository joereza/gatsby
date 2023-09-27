import React, { ReactNode } from 'react';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { CommonNode } from '@contentful/rich-text-react-renderer';
import { Text } from '../ds/Text';
import { BodySizeValue } from '../ds/Typography';

export function useCMSRichTextOptions({ size }: { size: BodySizeValue }) {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: CommonNode, children: ReactNode) => (
        <Text size={size}>{children}</Text>
      ),
    },
  };

  return options;
}
