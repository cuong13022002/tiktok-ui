import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Button({ to, href ,primary=false,outline=false, small=false,large=false,text=false, children , onClick ,...passProps }) {
  
    let Comp ='button';

    const props = {
        onClick,
        ...passProps,
    }

    if(to){
        props.to = to
        Comp = Link
    }else if (href) {
        props.href = href
        Comp = 'a'
    }


    const classes = cx('wrapper',{
        primary,
        outline,
        small,
        large,
        text,
    });


    return ( 
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
     );
}

export default Button;