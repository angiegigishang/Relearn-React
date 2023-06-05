import React, { useContext, FunctionComponentElement } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
  children: any;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className}) => {
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child , i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if ( childElement.type.displayName === 'MenuItem' ) {
        return childElement
      } else {
        console.error('error')
      }
    })
    return (
      <ul className='viking-submenu'>
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
       {title}
      </div>
      {renderChildren()}
    </li>
  )
}


SubMenu.displayName = 'SubMenu'
export default SubMenu