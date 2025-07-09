import React, {useEffect, useState, type ReactNode} from 'react';
import ComponentTypes from '@theme/NavbarItem/ComponentTypes';
import type {NavbarItemType, Props} from '@theme/NavbarItem';

function normalizeComponentType(type: NavbarItemType, props: object) {
  // Backward compatibility: navbar item with no type set
  // but containing dropdown items should use the type "dropdown"
  if (!type || type === 'default') {
    return 'items' in props ? 'dropdown' : 'default';
  }
  return type;
}

export default function NavbarItem({type, ...props}: Props): ReactNode {
  const label = (props as any).label as string | undefined;
  const to = (props as any).to as string | undefined;
  const componentType = normalizeComponentType(type, props);
  const NavbarItemComponent = ComponentTypes[componentType];
  if (!NavbarItemComponent) {
    throw new Error(`No NavbarItem component found for type "${type}".`);
  }

  const isBlog = (label && label.toLowerCase() === 'news') || (to && to.startsWith('/blog'));
  const [show, setShow] = useState(!isBlog);

  useEffect(() => {
    if (isBlog) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer)
    };
  }, [isBlog]);

  if (isBlog && !show)
  {
    return null;
  }
  else if (isBlog)
  {
    return <><NavbarItemComponent {...(props as any)} /><span dangerouslySetInnerHTML={{__html:"<!-- Teehee! Can't hide from me~! -->"}} style={{visibility:'hidden'}}/></>;
  }

  return <NavbarItemComponent {...(props as any)} />;
}
