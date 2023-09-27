import { renderRichText } from 'gatsby-source-contentful/rich-text';
import React from 'react';
import { useCMSRichTextOptions } from './useCMSRichTextOptions';
import { Text } from '../ds/Text';
import { BodySizeValue } from '../ds/Typography';

interface CMSRichTextProps {
  data?: {
    raw: string;
  };
  size?: BodySizeValue;
}

export function CMSRichText({ data, size = 'base' }: CMSRichTextProps) {
  const options = useCMSRichTextOptions({ size });

  return (
    <div>{data ? renderRichText(data, options) : <Text>Loading ...</Text>}</div>
  );
}
