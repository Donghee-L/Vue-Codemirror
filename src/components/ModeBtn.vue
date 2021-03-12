<template>
    <div>
        <label for="changeMode" @click='chageMode'>
            <input type="checkbox" id="changeMode">
            <span></span>
        </label><br>
        <span>{{modeState}}</span>
    </div>    
</template>

<script>
export default {
    name:"ModeBtn",
    data:function(){
        return {
            modeState:'White mode'
        }
    },
    methods:{
        chageMode:function(){
            const checkbox = document.querySelector('#changeMode')
            const label =  document.querySelector("label")
            if (checkbox.checked){
                this.modeState = "Dark mode"
                label.style.backgroundColor = "white"
                document.documentElement.style.setProperty("--mode-color","white")
                document.documentElement.style.setProperty("--mode-back-color","rgb(54, 53, 53)")
                document.documentElement.style.setProperty("--mode-box-shadow","white")
                document.documentElement.style.setProperty("--mode-editor-color","rgba(165, 165, 165, 0.479)")
            } else {
                this.modeState = "White mode"
                label.style.backgroundColor = "black"
                document.documentElement.style.setProperty("--mode-color","black")
                document.documentElement.style.setProperty("--mode-back-color","ivory")
                document.documentElement.style.setProperty("--mode-box-shadow","rgba(0, 0, 0, 0.623)")
                document.documentElement.style.setProperty("--mode-editor-color","rgba(230, 224, 224, 0.719)")
            }
        }
    }
    
}
</script>

<style>
label {
    position:relative;
    display: inline-block;
    width:100px;
    height:40px;
    border:1px solid black;
    border-radius: 10px;
    background-color: var(--mode-color);
    cursor:pointer;

}

label > span {
    position: absolute;
    height: 35px;
    width: 35px;
    background-color: var(--mode-back-color);
    top:50%;
    transform:translate(0%,-50%);
    border-radius: 10px;
    left: 3%;
    transition:0.3s;

}

input:checked + span {
    left: 60%;    
    background-color: black;
}


label:hover > span {
    background-color: rgb(180, 180, 240);
}


#changeMode {
    visibility: hidden;
}

label + br + span {
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
    color:var(--mode-color);
}

</style>