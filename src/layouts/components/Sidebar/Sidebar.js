import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import Menu , {MenuItem} from './Menu'
import { 
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon 
} from "~/component/Icons";
import config from "~/config";
import SuggestedAccounts from "~/component/SuggestedAccounts";
import * as useService from '~/services/userService'
import { useEffect, useState } from "react";


const cx = classNames.bind(styles)
const INIT_PAGE = 1;
const PER_PAGE = 5

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers,setSuggestedUsers] = useState([]);

    useEffect (() => {
        useService.getSuggested({page, perPage:PER_PAGE})
        .then(data =>{
            setSuggestedUsers(pervUsers => [...pervUsers,...data])
        }).catch((error) => console.log(error));
    },[page])

    const handleViewChange = () =>{
            setPage(page+1);
    }

    return <div className={cx('wrapper')} >
        <Menu>
            <MenuItem title= "For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem 
                title= "Following" 
                to={config.routes.following} 
                icon= {<UserGroupIcon/>}  
                activeIcon={<UserGroupActiveIcon/> }
            />
            <MenuItem title= "LIVE" to={config.routes.live} icon ={<LiveIcon />} activeIcon={<LiveActiveIcon/> }/>
        </Menu>
        <SuggestedAccounts label="Suggested accounts" data ={suggestedUsers}  onViewChange={handleViewChange}/>
        <SuggestedAccounts label="Following" data={suggestedUsers} />
        <p>
            dsa
        </p>
        
    </div>;
}

export default Sidebar;