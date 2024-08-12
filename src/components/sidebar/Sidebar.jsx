// src/components/sidebar/Sidebar.jsx
import React, { useEffect, useState } from 'react';
import SidebarButton from './SidebarButton';
import './sidebar.css'
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { TbPlayerEject } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from '../../spotify';


function Sidebar() {


    const [image, setImage] = useState(
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
    );
    useEffect(() => {
        apiClient.get("me").then((response) => {
            setImage(response.data.images[0].url);
        });
    }, []);
    return (
        <div className='sidebar-container'>
            <img
                src={image}
                className='profile-img'
                alt='profileimg'
            />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
                <SidebarButton title="Trending" to="/trending" icon={<IoMdTrendingUp />} />
                <SidebarButton title="Player" to="/player" icon={<TbPlayerEject />} />
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />} />
                <SidebarButton title="Library" to="/library" icon={<VscLibrary />} />

            </div>
            <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
        </div>
    );
}

export default Sidebar;
