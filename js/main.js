// const islands=document.querySelectorAll(".island");

// islands.forEach((island,index)=>{

//     island.onclick=()=>{

//         alert("Bạn vừa click đảo "+(index+1));

//     }

// });

const originalWidth = 1536;
const originalHeight = 1024;

const islands = {

    island1:{
        x:190,
        y:170,
        w:270,
        h:250
    },

    island2:{
        x:550,
        y:30,
        w:270,
        h:270
    },

    island3:{
        x:880,
        y:30,
        w:250,
        h:240
    },

    island4:{
        x:1235,
        y:130,
        w:270,
        h:230
    },

    island5:{
        x:1200,
        y:390,
        w:230,
        h:200
    },

    island6:{
        x:1185,
        y:600,
        w:220,
        h:200
    },

    island7:{
        x:920,
        y:700,
        w:260,
        h:190
    },

    island8:{
        x:370,
        y:780,
        w:170,
        h:130
    },

    island9:{
        x:350,
        y:640,
        w:200,
        h:145
    },

    island10:{
        x:420,
        y:400,
        w:250,
        h:190
    },

    island11:{
        x:650,
        y:600,
        w:200,
        h:170
    },

    island12:{
        x:750,
        y:305,
        w:370,
        h:250
    },

};

const img = document.getElementById("map");

function resizeHotspots(){

    const scaleX = img.clientWidth / originalWidth;
    const scaleY = img.clientHeight / originalHeight;

    for(const id in islands){

        const d = islands[id];

        const el = document.getElementById(id);

        el.style.left = d.x * scaleX + "px";
        el.style.top = d.y * scaleY + "px";

        el.style.width = d.w * scaleX + "px";
        el.style.height = d.h * scaleY + "px";

    }

}

window.addEventListener("resize",resizeHotspots);

img.onload=resizeHotspots;
