import gsap from 'gsap';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
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

export default function TestGround() {

    const listItems = [
        {icon: DevicesIcon, name: 'Web Developer'},
        {icon: CodeIcon, name: 'React Expert'},
        {icon: DesignServicesIcon, name: 'Designer'},
        {icon: MusicNoteIcon, name: 'Drummer'},
        {icon: BrushIcon, name: 'Digital Artist'},
        {icon: ViewInArIcon, name: '3D Artist'},
        {icon: MusicNoteIcon, name: 'Drummer'},
        
        {icon: HikingIcon, name: 'Adventurer'},
        {icon: JavascriptIcon, name: 'JavaScript Expert'},
        {icon: DeveloperBoardIcon, name: 'Front-End Developer'},
        {icon: ApiIcon, name: 'Back-End Developer'},
        {icon: AnimationIcon, name: 'Animator'},


        {icon: MusicNoteIcon, name: 'Python'},
        {icon: MusicNoteIcon, name: 'Full-Stack'},
        // {icon: MusicNoteIcon, name: 'Designer'},
        // {icon: MusicNoteIcon, name: 'Drummer'},
        // {icon: MusicNoteIcon, name: 'Developer'},

        // {icon: MusicNoteIcon, name: 'Drummer'},
        // {icon: MusicNoteIcon, name: 'Developer'},
        // {icon: MusicNoteIcon, name: 'Designer'},
        // {icon: MusicNoteIcon, name: 'Drummer'},
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
        <div className='grid grid-cols-1 md:grid-cols-2 content-center h-screen bg-black text-white'>
            <div className='flex justify-center'>
                <div className='my-auto'>
                    <h1 className='text-2xl text-center'>Andrew</h1>
                    <h1 className='text-8xl'>Stanecek</h1>
                </div>
            </div>

            <div className="container h-screen py-8 bg-black flex justify-center my-auto overflow-hidden">
                <div className="bg-white my-auto wrapper ">
                    <div className="boxes " id="boxCol">
                        {listItems.map((listItem, i) => <div className='box absolute w-1000 my-auto'  key={i}>
                            <ListItem>
                            <ListItemAvatar className='flex' >
                                <listItem.icon fontSize='large'/>
                            </ListItemAvatar>
                            <ListItemText primaryTypographyProps={{fontSize: '50px'}} primary={listItem.name} />
                            </ListItem >
                        </div>)}
                    </div>
                </div>
            </div>
                

        </div>
    )
}


