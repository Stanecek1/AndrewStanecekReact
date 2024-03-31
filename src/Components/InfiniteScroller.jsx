import gsap from 'gsap';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useEffect } from 'react';

import CodeIcon from '@mui/icons-material/Code';
import JavascriptIcon from '@mui/icons-material/Javascript';
import HikingIcon from '@mui/icons-material/Hiking';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BrushIcon from '@mui/icons-material/Brush';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import AnimationIcon from '@mui/icons-material/Animation';
import ApiIcon from '@mui/icons-material/Api';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import SnowboardingIcon from '@mui/icons-material/Snowboarding';

export default function InfiniteScroller() {
    const listItems = [
        {icon: DevicesIcon, name: 'Web Developer'},
        {icon: ViewInArIcon, name: '3D Artist'},
        {icon: StorageIcon, name: 'Back-End Developer'},
        {icon: MusicNoteIcon, name: 'Drummer'},
        {icon: BrushIcon, name: 'Digital Artist'},
        {icon: DesignServicesIcon, name: 'Web Designer'},
        {icon: CodeIcon, name: 'React Expert'},
        {icon: TerminalIcon, name: 'Software Engineer'},
        {icon: HikingIcon, name: 'Adventurer'},
        {icon: JavascriptIcon, name: 'JavaScript Expert'},
        {icon: DeveloperBoardIcon, name: 'Front-End Developer'},
        {icon: AnimationIcon, name: 'Animator'},
        {icon: MusicNoteIcon, name: 'Python Programmer'},
        {icon: ApiIcon, name: 'Full-Stack Developer'},
        {icon: SnowboardingIcon, name: 'Snowboarder'},
      ]

    useEffect(() => {
        const setHeight = 100; //height of the boxes
        const numBoxes = document.querySelectorAll('.box').length; //quantity of boxes
        gsap.set(".box", {
            y: (i) => i * setHeight
            });
        
        const totalHeight= numBoxes*setHeight;
        const wrapOffsetTop = -10;
        const wrapOffsetBottom = totalHeight+wrapOffsetTop;
        var wrap = gsap.utils.wrap(wrapOffsetTop,wrapOffsetBottom);
        const yheight = "+=" + totalHeight*-1;
        let tl = gsap.timeline();
        tl.to(".box", {
        duration: 15,
        ease: "none",
        y: yheight, //move each box the total height of all boxes to upwards
        modifiers: {
            y: gsap.utils.unitize(wrap) //force y value to wrap when it reaches -100
        },
        repeat: -1
        });
    },[])

    return(
        <div className="container h-screen py-8 flex justify-center my-auto overflow-hidden">
            <div className="my-auto wrapper ">
                <div className="boxes " id="boxCol">
                    {listItems.map((listItem, i) => <div className='box absolute w-1000 my-auto'  key={i}>
                        <ListItem>
                        <ListItemAvatar className='flex' >
                            <listItem.icon fontSize='large'/>
                        </ListItemAvatar>
                        <ListItemText className='test' primaryTypographyProps={{fontSize: '50px', fontFamily: 'Oswald-VariableFont_wght'}} primary={listItem.name} />
                        </ListItem >
                    </div>)}
                </div>
            </div>
        </div>
    )
}