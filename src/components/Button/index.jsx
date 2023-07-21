import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './Button.module.scss';
function Button({
    to,
    href,
    onClick,
    children,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    textIcon = false,
    disable = false,
    rounded = false,
    leftIcon,
    className,
    ...passProps
}) {
    let Component = 'button';
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    if (disable) {
        delete props.onClick;
    }
    const classes = clsx(style.wrapepr, className, {
        [style.primary]: primary,
        [style.outline]: outline,
        [style.small]: small,
        [style.large]: large,
        [style.text]: text,
        [style.textIcon]: textIcon,
        [style.disable]: disable,
        [style.rounded]: rounded,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={clsx(style.leftIcon)}>{leftIcon}</span>}
            <span>{children}</span>
        </Component>
    );
}

export default Button;
