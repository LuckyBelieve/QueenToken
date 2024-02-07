import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 50 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars)
    return <p className="text-xs text-wrap">{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return <p>{text}...</p>;
};

export default ExpandableText;
