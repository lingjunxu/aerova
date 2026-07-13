import { createElement, type ReactNode } from "react";

interface StructuredDataProps {
  data: unknown;
}

export function StructuredData({ data }: StructuredDataProps): ReactNode {
  return createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  });
}

export default StructuredData;