<template>
    <div>
        <nav>
            <div>
                <img src="../assets/logo.png" alt="" width="100px" height="100px">
                <h1>vue-markdown</h1>
            </div>
            <div>
                <ModeBtn />
            </div>
        </nav>
    </div>
</template>

<script>
import ModeBtn from "@/components/ModeBtn"

export default {
    name:"Navbar",
    components:{
        ModeBtn
    },
    data:function(){
        return {
            logoPath: "../assets/logo.png",
        }
    },


}
</script>

<style>
nav {
    width: 100%;
    position:-webkit-sticky;
    position:sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--mode-back-color);    
    color:var(--mode-color);
    box-shadow: 0px 5px 7px var(--mode-box-shadow); 
    transition:0.3s;   
}
nav > div {
    display:flex;
    align-items: center;
    margin-left: 10px;
}

nav > div> img { 
    margin-right: 10px;
}

nav > div:nth-child(2){
    margin-right: 5%;
}

</style>